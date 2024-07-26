"use server";

import { prisma } from "@/prisma";
import type { Post } from "@prisma/client";

export const getPost = async (key: string) => {
  const pathStr = key.split("/")[1];
  const idStr = key.split("/")[2];

  if (pathStr !== "posts" || idStr === undefined) {
    throw new Error("Key not found");
  }

  const id = Number(idStr);

  if (Number.isNaN(id)) {
    throw new Error("Invalid key");
  }

  return prisma.post.findUnique({
    where: {
      id,
    },
  }) as Promise<Post>;
};
