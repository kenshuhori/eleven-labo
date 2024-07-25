"use server";

import { prisma } from "@/prisma";
import type { Post, Theme } from "@prisma/client";

export type ThemeWithPostsResult = {
  Posts: Post[];
} & Theme;

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

export const getThemeWithPosts = async (key: string) => {
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
    include: {
      Posts: true,
    },
    where: {
      id,
    },
  }) as Promise<ThemeWithPostsResult>;
};
