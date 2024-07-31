"use server";

import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";

export async function createComment(formData: FormData) {
  const { comment, postId } = {
    comment: formData.get("comment"),
    postId: formData.get("postId"),
  };

  if (comment === "" || postId === "") {
    return new Error("Invalid form data");
  }

  const { userId } = auth();

  if (!userId) {
    return new Error("User not authenticated");
  }

  try {
    await prisma.comment.create({
      data: {
        postId: Number(postId),
        authorId: userId,
        comment: comment as string,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create comment");
  }
}
