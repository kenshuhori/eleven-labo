"use server";

import { prisma } from "@/prisma";
import type { Theme } from "@prisma/client";

export const getTheme = async (key: string) => {
  const pathStr = key.split("/")[1];
  const idStr = key.split("/")[2];

  if (pathStr !== "themes" || idStr === undefined) {
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
