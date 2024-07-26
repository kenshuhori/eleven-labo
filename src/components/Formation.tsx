import type React from "react";
import { Fragment, createContext, useCallback, useEffect, useRef, useState } from "react";
import { FootballField } from "./FootballField";
import { PlayerIcon } from "./PlayerIcon";
import "@/styles/formations.css";
import { listPlayer } from "@/app/actions";
import { FormationIcon } from "@/components/FormationIcon";
import { defaultPlayer } from "@/fixtures/players";
import { positionCodes } from "@/fixtures/positionCodes";
import { teams } from "@/fixtures/teams";
import { groupedPlayers } from "@/utils/groupPlayer";
import { Skeleton } from "@chakra-ui/react";
import useSWR from "swr";

interface FormationProps {
  formationCode: Formation["code"];
  readonly?: boolean;
  style?: React.CSSProperties;
}

export const PlayerSelectOptionsContext = createContext<GroupedPlayerSelectOption[]>([]);

export const Formation = ({ formationCode, readonly = false, style }: FormationProps) => {
  const onChange = useCallback((selected: FormationSelectOption | null) => {
    if (selected === null) return;

    setFormationClass(`formation-${selected?.code}`);
  }, []);

  const [players, setPlayers] = useState<GroupedPlayerSelectOption[]>([]);
  const { data, error, isLoading } = useSWR("/players", listPlayer);

  useEffect(() => {
    const groupedOptions: GroupedPlayerSelectOption[] = groupedPlayers(data, teams);
    setPlayers(groupedOptions);
  }, [data]);

  const [formationClass, setFormationClass] = useState<string>(`formation-${formationCode}`);

  return (
    <PlayerSelectOptionsContext.Provider value={players}>
      <div className={formationClass}>
        <FootballField style={style}>
          {positionCodes.map((position) => {
            const playerRef = useRef<HTMLDivElement>(null);

            return (
              <Fragment key={position}>
                <PlayerIcon
                  position={position}
                  player={defaultPlayer({ number: position })}
                  readonly={readonly}
                  ref={playerRef}
                />
              </Fragment>
            );
          })}
          <FormationIcon formationCode={formationCode} onChange={onChange} readonly={readonly} />
        </FootballField>
      </div>
    </PlayerSelectOptionsContext.Provider>
  );
};

export const SkeletonFormation = () => {
  return <Skeleton style={{ height: "29rem", marginTop: "1rem" }} />;
};
