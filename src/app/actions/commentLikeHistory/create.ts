"use server";

import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

export async function createCommentLikeHistory(formData: FormData) {
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
    await prisma.commentLikeHistory.create({
      data: {
        commentId: Number(commentId),
        userId: userId,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create comment");
  }
}
