import type { Theme } from "@prisma/client";

export const themes: Theme[] = [
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    id: 1,
    thumbnail: "https://media.api-sports.io/football/teams/50.png",
    title: "24-25のマンチェスターシティ開幕ベストイレブンを考えよう!!",
  },
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    id: 2,
    thumbnail: "https://media.api-sports.io/football/leagues/42.png",
    title: "24-25のアーセナル開幕ベストイレブンを考えよう!!",
  },
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    id: 3,
    thumbnail: "https://media.api-sports.io/football/leagues/39.png",
    title: "24-25のリヴァプール開幕ベストイレブンを考えよう!!",
  },
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    id: 4,
    thumbnail: "https://media.api-sports.io/football/teams/47.png",
    title: "24-25のトッテナム開幕ベストイレブンを考えよう!!",
  },
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    id: 5,
    thumbnail: "https://media.api-sports.io/football/teams/33.png",
    title: "24-25のマンチェスターユナイテッド開幕ベストイレブンを考えよう!!",
  },
  {
    createdAt: new Date("2024-04-01T00:00:00Z"),
    id: 6,
    thumbnail: "https://media.api-sports.io/football/teams/49.png",
    title: "24-25のチェルシー開幕ベストイレブンを考えよう!!",
  },
];

export const defaultTheme: Theme = themes[0];
