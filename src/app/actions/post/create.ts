"use server";

import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const {
    themeId,
    description,
    formationCode,
    pos1PlayerId,
    pos2PlayerId,
    pos3PlayerId,
    pos4PlayerId,
    pos5PlayerId,
    pos6PlayerId,
    pos7PlayerId,
    pos8PlayerId,
    pos9PlayerId,
    pos10PlayerId,
    pos11PlayerId,
  } = {
    themeId: formData.get("themeId"),
    description: formData.get("description"),
    formationCode: formData.get("formationCode"),
    pos1PlayerId: formData.get("pos1PlayerId"),
    pos2PlayerId: formData.get("pos2PlayerId"),
    pos3PlayerId: formData.get("pos3PlayerId"),
    pos4PlayerId: formData.get("pos4PlayerId"),
    pos5PlayerId: formData.get("pos5PlayerId"),
    pos6PlayerId: formData.get("pos6PlayerId"),
    pos7PlayerId: formData.get("pos7PlayerId"),
    pos8PlayerId: formData.get("pos8PlayerId"),
    pos9PlayerId: formData.get("pos9PlayerId"),
    pos10PlayerId: formData.get("pos10PlayerId"),
    pos11PlayerId: formData.get("pos11PlayerId"),
  };

  console.log("themeId", themeId);
  console.log("description", description);
  console.log("formationCode", formationCode);
  console.log("pos1PlayerId", pos1PlayerId);
  console.log("pos2PlayerId", pos2PlayerId);
  console.log("pos3PlayerId", pos3PlayerId);
  console.log("pos4PlayerId", pos4PlayerId);
  console.log("pos5PlayerId", pos5PlayerId);
  console.log("pos6PlayerId", pos6PlayerId);
  console.log("pos7PlayerId", pos7PlayerId);
  console.log("pos8PlayerId", pos8PlayerId);
  console.log("pos9PlayerId", pos9PlayerId);
  console.log("pos10PlayerId", pos10PlayerId);
  console.log("pos11PlayerId", pos11PlayerId);

  if (themeId === "" || description === "") {
    return new Error("Invalid form data");
  }

  try {
    // await prisma.post.create({
    //   data: {
    //     themeId: Number(themeId),
    //     description: description as string,
    //     formationCode: formationCode as string,
    //     pos1PlayerId: Number(pos1PlayerId),
    //     pos2PlayerId: Number(pos2PlayerId),
    //     pos3PlayerId: Number(pos3PlayerId),
    //     pos4PlayerId: Number(pos4PlayerId),
    //     pos5PlayerId: Number(pos5PlayerId),
    //     pos6PlayerId: Number(pos6PlayerId),
    //     pos7PlayerId: Number(pos7PlayerId),
    //     pos8PlayerId: Number(pos8PlayerId),
    //     pos9PlayerId: Number(pos9PlayerId),
    //     pos10PlayerId: Number(pos10PlayerId),
    //     pos11PlayerId: Number(pos11PlayerId),
    //   },
    // });

    revalidatePath(`/themes/${themeId}`);
    redirect(`/themes/${themeId}`);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create comment");
  }
}
