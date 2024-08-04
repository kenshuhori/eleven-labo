"use server";

import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

export async function createThemeLikeHistory(themeId: number) {
  const { userId } = auth();

  if (!userId) {
    return new Error("User not authenticated");
  }

  if (!themeId) {
    return new Error("Invalid theme id");
  }

  try {
    await prisma.themeLikeHistory.create({
      data: {
        themeId: themeId,
        userId: userId,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create theme like history");
  }
}
