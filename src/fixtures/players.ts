import type { PlayerTeam } from "@/types";
import type { Team } from "@prisma/client";
import { defaultTeam } from "./teams";

export const defaultPlayer = ({
  name,
  number,
  team,
}: {
  name?: string;
  number?: number;
  textShadowColor?: string;
  team?: Team;
}): PlayerTeam => ({
  id: 0,
  name: name ?? "???",
  age: 0,
  number: number ?? 99,
  photo: "https://example.com/default.png",
  position: "Attacker",
  teamId: 40,
  team: team ?? defaultTeam({}),
});

export const players: PlayerTeam[] = [
  {
    id: 280,
    name: "Alisson Becker",
    age: 0,
    number: 1,
    photo: "https://media.api-sports.io/football/players/280.png",
    position: "Goalkeeper",
    teamId: 40,
    team: defaultTeam({}),
  },
  {
    id: 290,
    name: "V. van Dijk",
    age: 0,
    number: 4,
    photo: "https://media.api-sports.io/football/players/290.png",
    position: "Defender",
    teamId: 40,
    team: defaultTeam({}),
  },
  {
    id: 0,
    name: "K.De Bruyne",
    age: 0,
    number: 17,
    photo: "https://media.api-sports.io/football/players/0.png",
    position: "Midfielder",
    teamId: 50,
    team: defaultTeam({}),
  },
];
