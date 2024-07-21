type PostComment = {
  author: string;
  authorImage: string;
  createdAt: string;
  comment: string;
  id: number;
  likeCount: number;
};

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

type League = {
  id: number;
  name: string;
  logo: string;
};

type Player = {
  id: number;
  name: string;
  number: number;
  photo: string;
  position: "Goalkeeper" | "Defender" | "Midfielder" | "Attacker";
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

type PositionCode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

type GroupedPlayerSelectOption = {
  category: string;
  options: PlayerSelectOption[];
};

type Team = {
  id: number;
  name: string;
  code: string;
  logo: string;
  backgroundColor: string;
  borderColor: string;
  color: string;
  textShadowColor: string | null;
};

type Theme = {
  createdAt: string;
  likeCount: number;
  id: number;
  title: string;
};
