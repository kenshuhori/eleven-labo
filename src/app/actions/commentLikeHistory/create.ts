"use server";

import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

export async function countUp() {
  const { userId } = auth();

  if (!userId) {
    return new Error("User not authenticated");
  }

  try {
    await prisma.commentLikeHistory.create({
      data: {
        commentId: 1,
        userId: userId,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create comment");
  }
}
