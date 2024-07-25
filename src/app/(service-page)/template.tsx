"use client";

import { listPlayer } from "@/app/actions";
import { teams } from "@/fixtures/teams";
import { groupedPlayers } from "@/utils/groupPlayer";
import { createContext, useEffect, useState } from "react";
import useSWR from "swr";

export const PlayerSelectOptionsContext = createContext<GroupedPlayerSelectOption[]>([]);

export default function Template({ children }: { children: React.ReactNode }) {
  const [players, setPlayers] = useState<GroupedPlayerSelectOption[]>([]);
  const { data, error, isLoading } = useSWR("/players", listPlayer);

  useEffect(() => {
    const groupedOptions: GroupedPlayerSelectOption[] = groupedPlayers(data, teams);
    setPlayers(groupedOptions);
  }, [data]);

  return (
    <PlayerSelectOptionsContext.Provider value={players}>
      {children}
    </PlayerSelectOptionsContext.Provider>
  );
}
