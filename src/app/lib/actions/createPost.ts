"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData, theme: Theme) {
  console.log(formData.get("description"));
  console.log(formData.get("formation"));
  console.log(formData.get("position1"));
  console.log(formData.get("position2"));
  console.log(formData.get("position3"));
  console.log(formData.get("position4"));
  console.log(formData.get("position5"));
  console.log(formData.get("position6"));
  console.log(formData.get("position7"));
  console.log(formData.get("position8"));
  console.log(formData.get("position9"));
  console.log(formData.get("position10"));
  console.log(formData.get("position11"));
  revalidatePath(`/themes/${theme.id}`);
  redirect(`/themes/${theme.id}`);
}
