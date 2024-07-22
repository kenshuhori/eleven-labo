"use server";

import { prisma } from "@/prisma";
import type { Theme } from "@prisma/client";

export const getTheme = async (key: string) => {
  const idStr = key.split("/")[1];

  if (idStr === undefined) {
    throw new Error("Key not found");
  }

  const id = Number(idStr);

  if (Number.isNaN(id)) {
    throw new Error("Invalid key");
  }

  return prisma.theme.findUnique({
    where: {
      id,
    },
  }) as Promise<Theme>;
};
