import type { Player, Position, Team } from "@prisma/client";

type Eleven = {
  positionCode: number;
  player: PlayerTeam;
}[];

type Formation = {
  code: string;
  name: string;
};

type PlayerTeam = Player & { team: Team };
