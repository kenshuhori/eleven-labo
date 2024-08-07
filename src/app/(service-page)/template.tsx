"use client";

import { listPlayer } from "@/app/actions";
import type { PlayerSelectOption } from "@/types";
import { groupedPlayers } from "@/utils/groupPlayer";
import { createContext, useMemo, useState } from "react";
import useSWRImmutable from "swr";

export const PlayerSelectOptionsContext = createContext<
  { teamName: string; teamId: number; leagueId: number; options: PlayerSelectOption[] }[]
>([]);

export default function Template({ children }: { children: React.ReactNode }) {
  const [players, setPlayers] = useState<
    { teamName: string; teamId: number; leagueId: number; options: PlayerSelectOption[] }[]
  >([]);
  const { data, error, isLoading } = useSWRImmutable("/players", listPlayer);

  useMemo(() => {
    const groupedOptions = groupedPlayers(data);
    setPlayers(groupedOptions);
  }, [data]);

  return (
    <PlayerSelectOptionsContext.Provider value={players}>
      {children}
    </PlayerSelectOptionsContext.Provider>
  );
}
