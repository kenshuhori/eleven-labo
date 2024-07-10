type Formation = {
  code: string;
  name: string;
};

type Player = {
  name: string;
  number: number;
  team: Team;
};

type Team = {
  code: string;
  name: string;
  backgroundColor: string;
  borderColor: string;
  color: string;
  textShadowColor: string | null;
};

type Theme = {
  title: string;
};
