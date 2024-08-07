import type { PostWithRelation } from "@/app/actions/post/get";
import { defaultPlayer } from "@/fixtures/players";
import { defaultUser } from "@/fixtures/users";

export const defaultPostWithRelation: PostWithRelation = {
  id: 1,
  description:
    "4-1-2-3で考えました。まずキーハーがXXXXなのは言うまでもありません。右SBはリヴァプールで今シーズン台頭したブラッドリーを選出したいと思います。",
  formationCode: "4-1-2-3",
  likeHistories: [],
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
  themeId: 1,
  theme: {
    id: 1,
    thumbnail: "https://media.api-sports.io/football/leagues/39.png",
    title: "プレミアリーグ",
    createdAt: new Date("2024-01-01T00:00:00Z"),
  },
  authorId: defaultUser.id,
  author: defaultUser,
  createdAt: new Date("2024-01-01T00:00:00Z"),
};
