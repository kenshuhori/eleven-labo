"use server";

import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

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
    Number.isNaN(themeId) ||
    Number(themeId) === 0 ||
    description === "" ||
    formationCode === "" ||
    Number.isNaN(pos1PlayerId) ||
    Number(pos1PlayerId) === 0 ||
    Number.isNaN(pos2PlayerId) ||
    Number(pos2PlayerId) === 0 ||
    Number.isNaN(pos3PlayerId) ||
    Number(pos3PlayerId) === 0 ||
    Number.isNaN(pos4PlayerId) ||
    Number(pos4PlayerId) === 0 ||
    Number.isNaN(pos5PlayerId) ||
    Number(pos5PlayerId) === 0 ||
    Number.isNaN(pos6PlayerId) ||
    Number(pos6PlayerId) === 0 ||
    Number.isNaN(pos7PlayerId) ||
    Number(pos7PlayerId) === 0 ||
    Number.isNaN(pos8PlayerId) ||
    Number(pos8PlayerId) === 0 ||
    Number.isNaN(pos9PlayerId) ||
    Number(pos9PlayerId) === 0 ||
    Number.isNaN(pos10PlayerId) ||
    Number(pos10PlayerId) === 0 ||
    Number.isNaN(pos11PlayerId) ||
    Number(pos11PlayerId) === 0
  ) {
    return new Error("Invalid form data");
  }

  const { userId } = auth();

  if (!userId) {
    return new Error("User not authenticated");
  }

  try {
    await prisma.post.create({
      data: {
        themeId: Number(themeId),
        description: description as string,
        formationCode: formationCode as string,
        authorId: userId,
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
    return new Error("Failed to create post");
  }
}
