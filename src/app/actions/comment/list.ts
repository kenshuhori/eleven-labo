"use server";

import { prisma } from "@/prisma";
import type { Comment } from "@prisma/client";

export const listCommentsByPostId = async (key: string) => {
  const pathStr = key.split("/")[1];
  const idStr = key.split("/")[2];

  if (pathStr !== "posts" || idStr === undefined) {
    throw new Error("Key not found");
  }

  const postId = Number(idStr);

  if (Number.isNaN(postId)) {
    throw new Error("Invalid key");
  }

  return prisma.comment.findMany({
    where: {
      postId,
    },
  }) as Promise<Comment[]>;
};
