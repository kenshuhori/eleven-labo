export const groupedPlayers = (players: Player[], teams: Team[]): GroupedPlayerSelectOption[] => {
  const groupedOptions: GroupedPlayerSelectOption[] = sortedTeams(teams).map((team) => {
    const options = players.filter((player) => player.team.code === team.code);
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
