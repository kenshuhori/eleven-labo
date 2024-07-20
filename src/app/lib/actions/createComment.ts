"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createComment(formData: FormData, postId: number) {
  console.log(formData.get("comment"));
  revalidatePath(`/posts/${postId}`);
  redirect(`/posts/${postId}`);
}
