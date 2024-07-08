type Player = {
  name: string;
  number: number;
  team: Team;
};

type Team = {
  name: string;
  backgroundColor: string;
  borderColor: string;
  color: string;
  textShadowColor: string | null;
};
