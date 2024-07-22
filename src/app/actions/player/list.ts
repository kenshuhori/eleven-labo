"use server";

import { prisma } from "@/prisma";

export const listPlayer = async (_key: string) => {
  return prisma.player.findMany({
    include: {
      team: true,
    },
    orderBy: {
      team: {
        name: "asc",
      },
      position: "asc",
      number: "asc",
    },
  });
};
