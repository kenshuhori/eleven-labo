import { teams } from "@/fixtures/teams";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    teams.map(async (team) => {
      await sql`
        INSERT INTO teams (name, code, logo, backgroundColor, borderColor, color, textShadowColor)
        VALUES (${team.name}, ${team.code}, ${team.logo}, ${team.backgroundColor}, ${team.borderColor}, ${team.color}, ${team.textShadowColor})
      `;
    });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
