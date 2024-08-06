import { organizationName } from "@/constants";
import { auth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    if (!checkPermission(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ここに処理を記述
    // const { searchParams } = new URL(request.url);
    // const teamId = searchParams.get("teamId") || 50;
    const leagueId = 61; // Ligue 1
    const teams = await prisma.team.findMany({
      where: {
        leagueId: leagueId,
      },
    });

    for (const t of teams) {
      console.log(`================ ${t.name} ================`);
      if (t.id < 111) {
        continue;
      }

      const url = `https://v3.football.api-sports.io/players/squads?team=${t.id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.API_FOOTBALL_API_KEY || "",
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
        redirect: "follow",
      });
      const data = await response.json();
      const { team, players } = data.response[0];

      for (const player of players) {
        await prisma.player.upsert({
          where: { id: player.id },
          update: {
            name: player.name,
            age: player.age,
            number: player.number,
            position: player.position,
            photo: player.photo,
            teamId: team.id,
          },
          create: {
            id: player.id,
            name: player.name,
            age: player.age,
            number: player.number,
            position: player.position,
            photo: player.photo,
            teamId: team.id,
          },
        });
      }
    }

    return NextResponse.json({ result: "success" }, { status: 200 });
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
