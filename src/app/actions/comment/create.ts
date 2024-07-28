"use server";

import { prisma } from "@/prisma";

export async function createComment(formData: FormData) {
  const { comment, postId } = {
    comment: formData.get("comment"),
    postId: formData.get("postId"),
  };

  if (comment === "" || postId === "") {
    return new Error("Invalid form data");
  }

  try {
    await prisma.comment.create({
      data: {
        postId: Number(postId),
        comment: comment as string,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create comment");
  }
}
