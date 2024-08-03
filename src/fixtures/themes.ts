import type { Theme } from "@prisma/client";

export const themes: Theme[] = [
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    id: 1,
    thumbnail: "https://media.api-sports.io/football/teams/50.png",
    title: "23-24のマンチェスターシティのベスト11を考えよう!!",
  },
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    id: 2,
    thumbnail: "https://media.api-sports.io/football/leagues/39.png",
    title: "23-24のプレミアリーグベスト11を考えよう!!",
  },
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    id: 3,
    thumbnail: "https://media.api-sports.io/football/leagues/39.png",
    title: "歴代のプレミアリーグベスト11を考えよう!!",
  },
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    id: 4,
    thumbnail: "https://media.api-sports.io/football/teams/40.png",
    title: "クロップ政権下（2015年〜2023年）でのリヴァプールのベスト11を考えよう!!",
  },
];

export const defaultTheme: Theme = themes[0];
