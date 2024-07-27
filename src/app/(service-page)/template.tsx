"use client";

import { listPlayer } from "@/app/actions";
import { groupedPlayers } from "@/utils/groupPlayer";
import { createContext, useEffect, useState } from "react";
import useSWRImmutable from "swr";

export const PlayerSelectOptionsContext = createContext<GroupedPlayerSelectOption[]>([]);

export default function Template({ children }: { children: React.ReactNode }) {
  const [players, setPlayers] = useState<GroupedPlayerSelectOption[]>([]);
  const { data, error, isLoading } = useSWRImmutable("/players", listPlayer);

  useEffect(() => {
    const groupedOptions: { category: string; options: PlayerSelectOption[] }[] =
      groupedPlayers(data);
    setPlayers(groupedOptions);
  }, [data]);

  return (
    <PlayerSelectOptionsContext.Provider value={players}>
      {children}
    </PlayerSelectOptionsContext.Provider>
  );
}
