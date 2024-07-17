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
          {[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((position) => {
            const playerRef = useRef<HTMLDivElement>(null);

            // useEffect(() => {
            //   if (!playerRef.current) return;

            //   const playerIcon = playerRef.current;
            //   playerIcon.onpointermove = (event) => {
            //     if (event.buttons) {
            //       const horizon = playerIcon.offsetLeft + event.movementX;
            //       const vertical = playerIcon.offsetTop + event.movementY;
            //       if (horizon < 0 || horizon > window.innerWidth - 100) return;
            //       if (vertical < 0 || vertical > window.innerHeight - 100) return;

            //       playerIcon.style.left = `${playerIcon.offsetLeft + event.movementX}px`;
            //       playerIcon.style.top = `${playerIcon.offsetTop + event.movementY}px`;
            //       playerIcon.style.position = "absolute";
            //       playerIcon.draggable = false;
            //       playerIcon.setPointerCapture(event.pointerId);
            //     }
            //   };
            // }, []);

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
          <FormationIcon formation={formation} onChange={onChange} readonly={readonly} />
        </FootballField>
      </div>
    </>
  );
};
