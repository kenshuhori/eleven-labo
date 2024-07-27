import type { PlayerSelectOption, PlayerTeam } from "@/types";

export const groupedPlayers = (
  players: PlayerTeam[] | undefined,
): { category: string; options: PlayerSelectOption[] }[] => {
  if (players === undefined) {
    return [];
  }

  const groupByTeam = Map.groupBy(players, (x) => x.team.name);
  const toArray = Array.from(groupByTeam.entries());
  return sortByTeam(toArray).map(([key, value]) => {
    return {
      category: key,
      options: value.map((player) => ({
        value: player.id,
        label: player.name,
        ...player,
      })),
    };
  });
};

const sortByTeam = (group: [string, PlayerTeam[]][]) => {
  return group.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }

    return 0;
  });
};
