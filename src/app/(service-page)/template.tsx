"use client";

import { listPlayer } from "@/app/actions";
import type { PlayerSelectOption } from "@/types";
import { groupedPlayers } from "@/utils/groupPlayer";
import { createContext, useEffect, useState } from "react";
import useSWRImmutable from "swr";

export const PlayerSelectOptionsContext = createContext<
  { category: string; options: PlayerSelectOption[] }[]
>([]);

export default function Template({ children }: { children: React.ReactNode }) {
  const [players, setPlayers] = useState<{ category: string; options: PlayerSelectOption[] }[]>([]);
  const { data, error, isLoading } = useSWRImmutable("/players", listPlayer);

  useEffect(() => {
    const groupedOptions = groupedPlayers(data);
    setPlayers(groupedOptions);
  }, [data]);

  return (
    <PlayerSelectOptionsContext.Provider value={players}>
      {children}
    </PlayerSelectOptionsContext.Provider>
  );
}
