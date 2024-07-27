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

type GroupedPlayerSelectOption = {
  category: string;
  options: PlayerSelectOption[];
};
