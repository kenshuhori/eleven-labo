"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createComment(formData: FormData) {
  const { comment, postId } = {
    comment: formData.get("comment"),
    postId: formData.get("postId"),
  };

  console.log(comment);
  console.log(postId);

  revalidatePath(`/posts/${postId}`);
  redirect(`/posts/${postId}`);
}
