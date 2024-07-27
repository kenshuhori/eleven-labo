import type { Player, Position, Team } from "@prisma/client";

type Eleven = {
  positionCode: number;
  player: PlayerTeam;
}[];

type PlayerTeam = Player & { team: Team };
