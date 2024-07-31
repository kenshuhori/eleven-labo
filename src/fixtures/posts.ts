import type { PostWithRelation } from "@/app/actions/post/get";
import { defaultPlayer } from "@/fixtures/players";
import { defaultUser } from "@/fixtures/users";
import type { Post } from "@prisma/client";

export const defaultPostWithRelation: PostWithRelation = {
  id: 1,
  description:
    "4-1-2-3で考えました。まずキーハーがXXXXなのは言うまでもありません。右SBはリヴァプールで今シーズン台頭したブラッドリーを選出したいと思います。",
  formationCode: "4-1-2-3",
  pos1PlayerId: 306,
  pos1Player: defaultPlayer({}),
  pos2PlayerId: 306,
  pos2Player: defaultPlayer({}),
  pos3PlayerId: 306,
  pos3Player: defaultPlayer({}),
  pos4PlayerId: 306,
  pos4Player: defaultPlayer({}),
  pos5PlayerId: 306,
  pos5Player: defaultPlayer({}),
  pos6PlayerId: 306,
  pos6Player: defaultPlayer({}),
  pos7PlayerId: 306,
  pos7Player: defaultPlayer({}),
  pos8PlayerId: 306,
  pos8Player: defaultPlayer({}),
  pos9PlayerId: 306,
  pos9Player: defaultPlayer({}),
  pos10PlayerId: 306,
  pos10Player: defaultPlayer({}),
  pos11PlayerId: 306,
  pos11Player: defaultPlayer({}),
  likeCount: 12,
  themeId: 1,
  theme: {
    id: 1,
    thumbnail: "https://media.api-sports.io/football/leagues/39.png",
    title: "プレミアリーグ",
    createdAt: new Date("2024-01-01T00:00:00Z"),
    likeCount: 0,
  },
  authorId: defaultUser.id,
  author: defaultUser,
  createdAt: new Date("2024-01-01T00:00:00Z"),
};

export const posts: Post[] = [
  {
    id: 1,
    description:
      "4-1-2-3で考えました。まずキーハーがXXXXなのは言うまでもありません。右SBはリヴァプールで今シーズン台頭したブラッドリーを選出したいと思います。",
    formationCode: "4-1-2-3",
    pos1PlayerId: 306,
    pos2PlayerId: 306,
    pos3PlayerId: 306,
    pos4PlayerId: 306,
    pos5PlayerId: 306,
    pos6PlayerId: 306,
    pos7PlayerId: 306,
    pos8PlayerId: 306,
    pos9PlayerId: 306,
    pos10PlayerId: 306,
    pos11PlayerId: 306,
    likeCount: 12,
    themeId: 1,
    createdAt: new Date("2024-01-01T00:00:00Z"),
    authorId: defaultUser.id,
  },
  {
    id: 2,
    description:
      "3-4-3で考えました。まずキーハーがXXXXなのは言うまでもありません。右SBはリヴァプールで今シーズン台頭したブラッドリーを選出したいと思います。",
    formationCode: "3-4-3",
    pos1PlayerId: 6716,
    pos2PlayerId: 6716,
    pos3PlayerId: 6716,
    pos4PlayerId: 6716,
    pos5PlayerId: 6716,
    pos6PlayerId: 6716,
    pos7PlayerId: 6716,
    pos8PlayerId: 6716,
    pos9PlayerId: 6716,
    pos10PlayerId: 6716,
    pos11PlayerId: 6716,
    likeCount: 5,
    themeId: 1,
    createdAt: new Date("2024-04-01T00:00:00Z"),
    authorId: defaultUser.id,
  },
];

export const defaultPost: Post = posts[0];
