import type { Player, Position, Team } from "@prisma/client";

export type Eleven = {
  positionCode: number;
  player: PlayerTeam;
}[];

export type Formation = {
  code: string;
  name: string;
};

export type PlayerTeam = Player & { team: Team };
