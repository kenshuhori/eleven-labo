import type React from "react";
import { Fragment, useCallback, useRef, useState } from "react";
import { FootballField } from "./FootballField";
import { PlayerIcon } from "./PlayerIcon";
import "@/styles/formations.css";
import { FormationIcon } from "@/components/FormationIcon";
import { defaultPlayer } from "@/fixtures/players";
import { Skeleton } from "@chakra-ui/react";

interface FormationProps {
  formationCode: string;
  style?: React.CSSProperties;
}

export const Formation = ({ formationCode, style }: FormationProps) => {
  const onChange = useCallback((selected: FormationSelectOption | null) => {
    if (selected === null) return;

    setFormationClass(`formation-${selected?.code}`);
  }, []);

  const [formationClass, setFormationClass] = useState<string>(`formation-${formationCode}`);

  return (
    <div className={formationClass}>
      <FootballField style={style}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((position) => {
          const playerRef = useRef<HTMLDivElement>(null);

          return (
            <Fragment key={position}>
              <PlayerIcon
                position={position}
                player={defaultPlayer({ number: position })}
                ref={playerRef}
              />
            </Fragment>
          );
        })}
        <FormationIcon formationCode={formationCode} onChange={onChange} />
      </FootballField>
    </div>
  );
};

export const SkeletonFormation = () => {
  return <Skeleton style={{ height: "29rem", marginTop: "1rem" }} />;
};
