"use server";

import { prisma } from "@/prisma";
import type { Theme } from "@prisma/client";

export const listTheme = async (_key: string) => {
  return prisma.theme.findMany({
    orderBy: {
      createdAt: "desc",
    },
  }) as Promise<Theme[]>;
};
