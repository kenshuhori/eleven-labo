import { teams } from "@/fixtures/teams";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    teams.map(async (team) => {
      await sql`
        INSERT INTO teams (code, name, color, background_color, border_color, text_shadow_color)
        VALUES (${team.code}, ${team.name}, ${team.color}, ${team.backgroundColor}, ${team.borderColor}, ${team.textShadowColor})
      `;
    });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
