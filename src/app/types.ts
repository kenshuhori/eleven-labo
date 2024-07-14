type Formation = {
  code: string;
  name: string;
};

type FormationSelectOption = {
  value: string;
  label: string;
} & Formation;

type GroupedFormationSelectOption = {
  category: string;
  options: FormationSelectOption[];
};

type Player = {
  name: string;
  number: number;
  team: Team;
};

type PlayerSelectOption = {
  value: string;
  label: string;
} & Player;

type Team = {
  code: string;
  name: string;
  backgroundColor: string;
  borderColor: string;
  color: string;
  textShadowColor: string | null;
};

type Theme = {
  createdAt: string;
  likeCount: number;
  postCount: number;
  title: string;
  url: string;
};
