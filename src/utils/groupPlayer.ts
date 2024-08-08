import type { PlayerSelectOption, PlayerTeam } from "@/types";

export const groupedPlayers = (
  players: PlayerTeam[] | undefined,
): { teamName: string; teamId: number; leagueId: number; options: PlayerSelectOption[] }[] => {
  if (players === undefined) {
    return [];
  }

  const groupByTeam = Map.groupBy(players, (x) => x.team.name);
  const toArray = Array.from(groupByTeam.entries());
  return sortByTeam(toArray).map(([key, value]) => {
    return {
      teamName: key,
      teamId: value[0].team.id,
      leagueId: value[0].team.leagueId,
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
