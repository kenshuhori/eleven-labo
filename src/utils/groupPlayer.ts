import type { PlayerTeam } from "@/types";
import type { Team } from "@prisma/client";

export const groupedPlayers = (
  players: PlayerTeam[] | undefined,
  teams: Team[],
): GroupedPlayerSelectOption[] => {
  if (players === undefined) {
    return [];
  }

  const groupedOptions: GroupedPlayerSelectOption[] = sortedTeams(teams).map((team) => {
    const options = players.filter((player) => player.teamId === team.id);
    return {
      category: team.name,
      options: options.map((player) => ({
        value: player.name,
        label: player.name,
        ...player,
      })),
    };
  });

  return groupedOptions;
};

const sortedTeams = (teams: Team[]) => {
  return teams.sort((a, b) => {
    if (a.code < b.code) {
      return -1;
    }
    if (a.code > b.code) {
      return 1;
    }

    return 0;
  });
};
