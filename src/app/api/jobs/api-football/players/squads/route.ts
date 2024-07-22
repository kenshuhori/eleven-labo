import { organizationName } from "@/constants";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    if (!checkPermission(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ここに処理を記述
    const { searchParams } = new URL(request.url);
    const team = searchParams.get("team") || 40;

    const url = `https://v3.football.api-sports.io/players/squads?team=${team}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.API_FOOTBALL_API_KEY || "",
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
      redirect: "follow",
    });
    const players = await response.json();

    return NextResponse.json({ result: players }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

const checkPermission = (request: Request) => {
  const authHeader = request.headers.get("authorization");
  const { orgSlug } = auth();

  if (authHeader === `Bearer ${process.env.CRON_SECRET}`) {
    return true;
  }

  if (orgSlug === organizationName) {
    return true;
  }

  return false;
};
