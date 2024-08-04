"use server";

import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

export async function deleteThemeLikeHistory(themeId: number) {
  const { userId } = auth();

  if (!userId) {
    return new Error("User not authenticated");
  }

  if (!themeId) {
    return new Error("Invalid theme id");
  }

  try {
    const existingRecord = await prisma.themeLikeHistory.findUnique({
      where: {
        themeId_userId: {
          themeId: themeId,
          userId: userId,
        },
      },
    });
    if (existingRecord) {
      await prisma.themeLikeHistory.delete({
        where: {
          themeId_userId: {
            themeId: themeId,
            userId: userId,
          },
        },
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete theme like history");
  }
}
