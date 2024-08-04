"use server";

import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

export async function deleteCommentLikeHistory(commentId: number) {
  const { userId } = auth();

  if (!userId) {
    return new Error("User not authenticated");
  }

  if (!commentId) {
    return new Error("Comment ID not provided");
  }

  try {
    const existingRecord = await prisma.commentLikeHistory.findUnique({
      where: {
        commentId_userId: {
          commentId: commentId,
          userId: userId,
        },
      },
    });
    if (existingRecord) {
      await prisma.commentLikeHistory.delete({
        where: {
          commentId_userId: {
            commentId: commentId,
            userId: userId,
          },
        },
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete comment like history");
  }
}
