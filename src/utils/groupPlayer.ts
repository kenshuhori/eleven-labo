import type { PlayerSelectOption, PlayerTeam } from "@/types";
import type { Team } from "@prisma/client";

export const groupedPlayers = (
  players: PlayerTeam[] | undefined,
): { team: Team; options: PlayerSelectOption[] }[] => {
  if (players === undefined) {
    return [];
  }

  const groupByTeam = Map.groupBy(players, (x) => x.team.name);
  const toArray = Array.from(groupByTeam.entries());
  return sortByTeam(toArray).map(([_key, value]) => {
    return {
      team: value[0].team,
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
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }

    return 0;
  });
};
