import type React from "react";
import { Fragment, useCallback, useRef, useState } from "react";
import { FootballField } from "./FootballField";
import { PlayerIcon } from "./PlayerIcon";
import "@/styles/formations.css";
import { FormationIcon } from "@/components/FormationIcon";
import { PlayerIconSwitcher } from "@/components/PlayerIconSwitcher";
import { defaultPlayer } from "@/fixtures/players";
import type { FormationSelectOption } from "@/types";
import { Skeleton } from "@chakra-ui/react";
import type { Theme } from "@prisma/client";

interface Props {
  formationCode: string;
  style?: React.CSSProperties;
  theme: Theme;
}

export const Formation = ({ formationCode, style, theme }: Props) => {
  const [formationClass, setFormationClass] = useState<string>(`formation-${formationCode}`);
  const onChange = useCallback((selected: FormationSelectOption | null) => {
    if (selected === null) return;

    setFormationClass(`formation-${selected?.code}`);
  }, []);

  const [iconMode, setIconMode] = useState<"number" | "photo">("number");
  const switchIconMode = () => setIconMode(iconMode === "number" ? "photo" : "number");

  return (
    <div className={formationClass}>
      <FootballField style={style}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((position) => {
          const playerRef = useRef<HTMLDivElement>(null);

          return (
            <Fragment key={position}>
              <PlayerIcon
                iconMode={iconMode}
                position={position}
                player={defaultPlayer({ number: position })}
                ref={playerRef}
                theme={theme}
              />
            </Fragment>
          );
        })}
        <PlayerIconSwitcher onChange={switchIconMode} />
        <FormationIcon formationCode={formationCode} onChange={onChange} />
      </FootballField>
    </div>
  );
};

export const SkeletonFormation = () => {
  return <Skeleton style={{ height: "29rem", marginTop: "1rem" }} />;
};
