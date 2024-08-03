"use server";

import { prisma } from "@/prisma";
import type { Comment, CommentLikeHistory, User } from "@prisma/client";

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
    include: {
      author: {
        select: {
          firstName: true,
          lastName: true,
          username: true,
          hasImage: true,
          imageUrl: true,
          deletedAt: true,
        },
      },
      likeHistories: true,
    },
    where: {
      postId,
    },
  }) as Promise<CommentWithRelation[]>;
};

type CommentWithRelation = {
  author: User;
} & {
  likeHistories: CommentLikeHistory[];
} & Comment;
