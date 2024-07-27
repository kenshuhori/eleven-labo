"use server";

import { prisma } from "@/prisma";
import type { Comment, Player, Post, Theme } from "@prisma/client";

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
    include: {
      comments: true,
      theme: true,
      pos1Player: true,
      pos2Player: true,
      pos3Player: true,
      pos4Player: true,
      pos5Player: true,
      pos6Player: true,
      pos7Player: true,
      pos8Player: true,
      pos9Player: true,
      pos10Player: true,
      pos11Player: true,
    },
    where: {
      id,
    },
  }) as Promise<PostWithRelation>;
};

export type PostWithRelation = {
  comments: Comment[];
} & {
  theme: Theme;
} & {
  pos1Player: Player;
} & {
  pos2Player: Player;
} & {
  pos3Player: Player;
} & {
  pos4Player: Player;
} & {
  pos5Player: Player;
} & {
  pos6Player: Player;
} & {
  pos7Player: Player;
} & {
  pos8Player: Player;
} & {
  pos9Player: Player;
} & {
  pos10Player: Player;
} & {
  pos11Player: Player;
} & Post;
