import type { Player, Position, Team } from "@prisma/client";

export type Eleven = {
  positionCode: number;
  player: PlayerTeam;
}[];

export type Formation = {
  code: string;
  name: string;
};

export type FormationSelectOption = {
  value: string;
  label: string;
} & Formation;

export type PlayerSelectOption = {
  value: int;
  label: string;
} & PlayerTeam;

export type PlayerTeam = Player & { team: Team };

export type PostWithPlayers = {
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
