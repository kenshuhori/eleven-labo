import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const themes = await prisma.theme.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json({ themes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
