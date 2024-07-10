import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // await sql`DROP TABLE IF EXISTS teams;`;
    const result =
      await sql`CREATE TABLE Teams ( code varchar(255), name varchar(255), background_color varchar(255), border_color varchar(255), color varchar(255), text_shadow_color varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
