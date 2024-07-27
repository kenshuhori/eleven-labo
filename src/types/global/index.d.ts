type FormationSelectOption = {
  value: string;
  label: string;
} & Formation;

type GroupedFormationSelectOption = {
  category: string;
  options: FormationSelectOption[];
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
