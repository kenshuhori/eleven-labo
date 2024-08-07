import { organizationName } from "@/constants";
import { leagues } from "@/fixtures/leagues";
import { auth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    if (!checkPermission(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("================ teamデータ反映 開始 ================");

    for (const league of leagues) {
      console.log(`================ league = ${league.name} ================`);

      const url = `https://v3.football.api-sports.io/teams?league=${league.id}&season=2024`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.API_FOOTBALL_API_KEY || "",
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
        redirect: "follow",
      });
      const data = await response.json();
      for (const { team, venue } of data.response) {
        await prisma.team.upsert({
          where: { id: team.id },
          update: {
            name: team.name,
            code: team.code,
            logo: team.logo,
            leagueId: league.id,
          },
          create: {
            id: team.id,
            name: team.name,
            code: team.code,
            logo: team.logo,
            leagueId: league.id,
          },
        });
      }
    }

    console.log("================ teamデータ反映 終了 ================");
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
