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
    | "5-4-1"
    | string;
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

type PlayerSelectOption = {
  value: string;
  label: string;
} & Player;

type PositionCode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

type GroupedPlayerSelectOption = {
  category: string;
  options: PlayerSelectOption[];
};
