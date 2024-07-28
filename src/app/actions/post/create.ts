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

  if (
    Number.isInteger(themeId) &&
    description !== "" &&
    formationCode !== "" &&
    Number.isInteger(pos1PlayerId) &&
    Number.isInteger(pos2PlayerId) &&
    Number.isInteger(pos3PlayerId) &&
    Number.isInteger(pos4PlayerId) &&
    Number.isInteger(pos5PlayerId) &&
    Number.isInteger(pos6PlayerId) &&
    Number.isInteger(pos7PlayerId) &&
    Number.isInteger(pos8PlayerId) &&
    Number.isInteger(pos9PlayerId) &&
    Number.isInteger(pos10PlayerId) &&
    Number.isInteger(pos11PlayerId)
  ) {
    // OK
  } else {
    return new Error("Invalid form data");
  }

  try {
    await prisma.post.create({
      data: {
        themeId: Number(themeId),
        description: description as string,
        formationCode: formationCode as string,
        pos1PlayerId: Number(pos1PlayerId),
        pos2PlayerId: Number(pos2PlayerId),
        pos3PlayerId: Number(pos3PlayerId),
        pos4PlayerId: Number(pos4PlayerId),
        pos5PlayerId: Number(pos5PlayerId),
        pos6PlayerId: Number(pos6PlayerId),
        pos7PlayerId: Number(pos7PlayerId),
        pos8PlayerId: Number(pos8PlayerId),
        pos9PlayerId: Number(pos9PlayerId),
        pos10PlayerId: Number(pos10PlayerId),
        pos11PlayerId: Number(pos11PlayerId),
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create comment");
  }
}
