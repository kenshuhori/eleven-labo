"use server";

import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

export async function deletePostLikeHistory(postId: number) {
  const { userId } = auth();

  if (!userId) {
    return new Error("User not authenticated");
  }

  if (!postId) {
    return new Error("Post not found");
  }

  try {
    const existingRecord = await prisma.postLikeHistory.findUnique({
      where: {
        postId_userId: {
          postId: postId,
          userId: userId,
        },
      },
    });
    if (existingRecord) {
      await prisma.postLikeHistory.delete({
        where: {
          postId_userId: {
            postId: postId,
            userId: userId,
          },
        },
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete post like history");
  }
}
