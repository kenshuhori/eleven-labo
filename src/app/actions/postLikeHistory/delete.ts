"use server";

import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

export async function deletePostLikeHistory(formData: FormData) {
  const { commentId } = {
    commentId: formData.get("commentId"),
  };

  if (commentId === "") {
    return new Error("Invalid form data");
  }

  const { userId } = auth();

  if (!userId) {
    return new Error("User not authenticated");
  }

  try {
    const existingRecord = await prisma.commentLikeHistory.findUnique({
      where: {
        commentId_userId: {
          commentId: Number(commentId),
          userId: userId,
        },
      },
    });
    if (existingRecord) {
      await prisma.commentLikeHistory.delete({
        where: {
          commentId_userId: {
            commentId: Number(commentId),
            userId: userId,
          },
        },
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create comment");
  }
}
