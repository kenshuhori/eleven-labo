"use server";

import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

export async function createPostLikeHistory(postId: number) {
  const { userId } = auth();

  if (!userId) {
    return new Error("User not authenticated");
  }

  if (!postId) {
    return new Error("Post not found");
  }

  try {
    await prisma.postLikeHistory.create({
      data: {
        postId: postId,
        userId: userId,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create post like history");
  }
}
