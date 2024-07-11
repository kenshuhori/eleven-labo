"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTheme(formData: FormData) {
  const { title, like_count, post_count } = {
    title: formData.get("title"),
    like_count: formData.get("like_count") || 0,
    post_count: formData.get("post_count") || 0,
  };

  if (title === null) {
    return;
  }

  await sql`
    INSERT INTO themes (title)
    VALUES (${title.toString()})
  `;

  revalidatePath("/themes");
  redirect("/themes");
}
