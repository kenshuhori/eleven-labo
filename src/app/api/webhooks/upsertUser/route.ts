import type { WebhookEvent } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { Webhook } from "svix";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("You do not have permissions to access this endpoint");
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await request.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let event: WebhookEvent;

  try {
    event = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  console.log(`============= ${event.type} event is invoked! =============`);
  console.log(`============= target id = ${event.data.id} =============`);

  // Do something with the payload
  // For this guide, you simply log the payload to the console
  if (event.type === "user.created" || event.type === "user.updated") {
    const { id, first_name, last_name, username, has_image, image_url } = event.data;

    await prisma.user.upsert({
      where: { clerkUserId: id },
      update: {
        firstName: first_name,
        lastName: last_name,
        username: username,
        hasImage: has_image,
        imageUrl: image_url,
      },
      create: {
        clerkUserId: id,
        firstName: first_name,
        lastName: last_name,
        username: username,
        hasImage: has_image,
        imageUrl: image_url,
      },
    });
  }

  if (event.type === "user.deleted") {
    const { id } = event.data;
    await prisma.user.update({
      where: { clerkUserId: id },
      data: {
        firstName: "",
        lastName: "",
        username: "",
        hasImage: false,
        imageUrl: "",
        deletedAt: new Date(),
      },
    });
  }

  console.log(`============= ${event.type} event finished successfully! =============`);

  return new Response("", { status: 200 });
}
