type PlayerSelectOption = {
  value: string;
  label: string;
} & Player;

type GroupedPlayerSelectOption = {
  category: string;
  options: PlayerSelectOption[];
};
