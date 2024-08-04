"use server";

import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

export async function createCommentLikeHistory(commentId: number) {
  const { userId } = auth();

  if (!userId) {
    return new Error("User not authenticated");
  }

  if (!commentId) {
    return new Error("Comment ID not provided");
  }

  try {
    await prisma.commentLikeHistory.create({
      data: {
        commentId: commentId,
        userId: userId,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create comment like history");
  }
}
