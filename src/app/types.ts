type Formation = {
  code:
    | "3-4-1-2"
    | "3-4-2-1"
    | "3-4-3-D"
    | "3-4-3"
    | "4-1-2-3"
    | "4-1-4-1"
    | "4-2-1-3"
    | "4-2-3-1"
    | "4-3-3"
    | "4-4-1-1"
    | "4-4-2-D"
    | "4-4-2"
    | "4-6-0"
    | "5-4-1";
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

type Post = {
  author: string;
  authorImage: string;
  commentCount: number;
  createdAt: string;
  description: string;
  formation: Formation;
  id: number;
  likeCount: number;
};

type GroupedPlayerSelectOption = {
  category: string;
  options: PlayerSelectOption[];
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
  createdAt: string;
  likeCount: number;
  postCount: number;
  id: number;
  title: string;
  url: string;
};
