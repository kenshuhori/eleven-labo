"use server";

import { sql } from "@vercel/postgres";

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
    INSERT INTO themes (title, like_count, post_count)
    VALUES (${title.toString()}, 0, 0)
  `;
}
