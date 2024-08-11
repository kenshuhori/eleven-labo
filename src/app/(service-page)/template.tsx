"use client";

import { listPlayer } from "@/app/actions";
import type { PlayerSelectOption } from "@/types";
import { groupedPlayers } from "@/utils/groupPlayer";
import type { Team } from "@prisma/client";
import { createContext, useMemo, useState } from "react";
import useSWRImmutable from "swr";

export const PlayerSelectOptionsContext = createContext<
  { team: Team; options: PlayerSelectOption[] }[]
>([]);

export default function Template({ children }: { children: React.ReactNode }) {
  const [players, setPlayers] = useState<{ team: Team; options: PlayerSelectOption[] }[]>([]);
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
