"use server";

import { prisma } from "@/prisma";
import type { Player, Post, PostLikeHistory, Team, Theme, User } from "@prisma/client";

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
      author: true,
      likeHistories: true,
      theme: true,
      pos1Player: {
        include: {
          team: true,
        },
      },
      pos2Player: {
        include: {
          team: true,
        },
      },
      pos3Player: {
        include: {
          team: true,
        },
      },
      pos4Player: {
        include: {
          team: true,
        },
      },
      pos5Player: {
        include: {
          team: true,
        },
      },
      pos6Player: {
        include: {
          team: true,
        },
      },
      pos7Player: {
        include: {
          team: true,
        },
      },
      pos8Player: {
        include: {
          team: true,
        },
      },
      pos9Player: {
        include: {
          team: true,
        },
      },
      pos10Player: {
        include: {
          team: true,
        },
      },
      pos11Player: {
        include: {
          team: true,
        },
      },
    },
    where: {
      id,
    },
  }) as Promise<PostWithRelation>;
};

export type PostWithRelation = {
  author: User;
} & {
  likeHistories: PostLikeHistory[];
} & {
  theme: Theme;
} & {
  pos1Player: Player & {
    team: Team;
  };
} & {
  pos2Player: Player & {
    team: Team;
  };
} & {
  pos3Player: Player & {
    team: Team;
  };
} & {
  pos4Player: Player & {
    team: Team;
  };
} & {
  pos5Player: Player & {
    team: Team;
  };
} & {
  pos6Player: Player & {
    team: Team;
  };
} & {
  pos7Player: Player & {
    team: Team;
  };
} & {
  pos8Player: Player & {
    team: Team;
  };
} & {
  pos9Player: Player & {
    team: Team;
  };
} & {
  pos10Player: Player & {
    team: Team;
  };
} & {
  pos11Player: Player & {
    team: Team;
  };
} & Post;
