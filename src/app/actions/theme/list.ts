"use server";

import { prisma } from "@/prisma";

export const listTheme = async () => {
  try {
    const themes = await prisma.theme.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return themes;
  } catch (error) {
    console.error(error);
    return [];
  }
};
