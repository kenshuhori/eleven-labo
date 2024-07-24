import type { Theme } from "@prisma/client";

export const themes: Theme[] = [
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    likeCount: 0,
    id: 1,
    title: "23-24のマンチェスターシティのベスト11を考えよう!!",
  },
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    likeCount: 1,
    id: 2,
    title: "23-24のプレミアリーグベスト11を考えよう!!",
  },
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    likeCount: 3,
    id: 3,
    title: "歴代のプレミアリーグベスト11を考えよう!!",
  },
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    likeCount: 10,
    id: 4,
    title: "クロップ政権下（2015年〜2023年）でのリヴァプールのベスト11を考えよう!!",
  },
];
