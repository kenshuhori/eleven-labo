"use server";

import { prisma } from "@/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createComment(formData: FormData) {
  const { comment, postId } = {
    comment: formData.get("comment"),
    postId: formData.get("postId"),
  };

  console.log(comment);
  console.log(postId);

  try {
    await prisma.comment.create({
      data: {
        postId: Number(postId),
        comment: comment as string,
      },
    });
    revalidatePath(`/posts/${postId}`);
    redirect(`/posts/${postId}`);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create comment");
  }
}
