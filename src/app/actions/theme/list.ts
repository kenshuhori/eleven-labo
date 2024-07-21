"use server";

import { prisma } from "@/prisma";

export const listTheme = async () => {
  try {
    const themes = await prisma.theme.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(themes);

    return themes;
  } catch (error) {
    console.error(error);
    return [];
  }
};
