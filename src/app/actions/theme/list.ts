"use server";

import { prisma } from "@/prisma";
import type { Post, Theme } from "@prisma/client";

export const listTheme = async (key: string) => {
  const pathStr = key.split("/")[1];

  if (pathStr !== "themes") {
    throw new Error("Key not found");
  }

  return prisma.theme.findMany({
    include: {
      posts: {
        select: {
          id: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  }) as Promise<ThemeWithRelation[]>;
};

export type ThemeWithRelation = {
  posts: Post[];
} & Theme;
