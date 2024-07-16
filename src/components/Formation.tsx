import type React from "react";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { FootballField } from "./FootballField";
import { PlayerIcon } from "./PlayerIcon";
import "@/styles/formations.css";
import { FormationIcon } from "@/components/FormationIcon";
import { defaultPlayer } from "@/fixtures/players";

interface FormationProps {
  formation: Formation;
  readonly?: boolean;
  style?: React.CSSProperties;
}

export const Formation = ({ formation, readonly = false, style }: FormationProps) => {
  const onChange = useCallback((selected: FormationSelectOption | null) => {
    if (selected === null) return;

    setFormationClass(`formation-${selected?.code}`);
  }, []);

  const [formationClass, setFormationClass] = useState<string>(`formation-${formation.code}`);

  return (
    <>
      <div className={formationClass}>
        <FootballField style={style}>
          {[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((number) => {
            const playerRef = useRef<HTMLDivElement>(null);

            return (
              <Fragment key={number}>
                <PlayerIcon
                  className={`player-no${number} transition`}
                  player={defaultPlayer({ number })}
                  readonly={readonly}
                  ref={playerRef}
                />
              </Fragment>
            );
          })}
          <FormationIcon formation={formation} onChange={onChange} readonly={readonly} />
        </FootballField>
      </div>
    </>
  );
};
