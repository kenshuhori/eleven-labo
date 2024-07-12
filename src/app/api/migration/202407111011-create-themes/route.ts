import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // const result = await sql`DROP TABLE themes;`;
    const result =
      await sql`CREATE TABLE themes (title VARCHAR(255) NOT NULL, like_count INTEGER, post_count INTEGER, created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
