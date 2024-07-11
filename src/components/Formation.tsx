import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { FootballField } from "./FootballField";
import { PlayerIcon } from "./PlayerIcon";
import "@/styles/formations.css";
import { formations } from "@/fixtures/formations";
import Select from "react-select";

interface FormationProps {
  formation?: "4-3-3" | "4-4-2" | "3-4-3";
  style?: React.CSSProperties;
}

export const Formation = ({ formation, style }: FormationProps) => {
  const player01Ref = useRef<HTMLDivElement>(null);
  const player02Ref = useRef<HTMLDivElement>(null);
  const player03Ref = useRef<HTMLDivElement>(null);
  const player04Ref = useRef<HTMLDivElement>(null);
  const player05Ref = useRef<HTMLDivElement>(null);
  const player06Ref = useRef<HTMLDivElement>(null);
  const player07Ref = useRef<HTMLDivElement>(null);
  const player08Ref = useRef<HTMLDivElement>(null);
  const player09Ref = useRef<HTMLDivElement>(null);
  const player10Ref = useRef<HTMLDivElement>(null);
  const player11Ref = useRef<HTMLDivElement>(null);

  [
    player01Ref,
    player02Ref,
    player03Ref,
    player04Ref,
    player05Ref,
    player06Ref,
    player07Ref,
    player08Ref,
    player09Ref,
    player10Ref,
    player11Ref,
  ].forEach((playerRef, index) => {
    useEffect(() => {
      if (!playerRef.current) return;

      // ドラッグ&ドロップで移動する処理は一旦塞ぐ
      // const playerIcon = playerRef.current;
      // playerIcon.onpointermove = (event) => {
      //   if (event.buttons) {
      //     const horizon = playerIcon.offsetLeft + event.movementX;
      //     const vertical = playerIcon.offsetTop + event.movementY;
      //     if (horizon < 0 || horizon > window.innerWidth - 100) return;
      //     if (vertical < 0 || vertical > window.innerHeight - 100) return;

      //     playerIcon.style.left = `${pxToRem(playerIcon.offsetLeft + event.movementX)}rem`;
      //     playerIcon.style.top = `${pxToRem(playerIcon.offsetTop + event.movementY)}rem`;
      //     playerIcon.style.position = "absolute";
      //     playerIcon.draggable = false;
      //     playerIcon.setPointerCapture(event.pointerId);
      //   }
      // };
    }, [playerRef]);
  });

  const pxToRem = (px: number) => {
    const coefficient = window.innerWidth / 360;
    return px / 10 / coefficient;
  };

  type Option = {
    value: string;
    label: string;
  } & Formation;

  const onChange = useCallback((selected: Option | null) => {
    if (selected === null) return;

    setFormationClass(`formation-${selected?.code}`);
  }, []);

  const options: Option[] = formations.map((formation) => ({
    value: formation.code,
    label: formation.name,
    ...formation,
  }));

  const [formationClass, setFormationClass] = useState<string>(`formation-${formation}`);

  return (
    <>
      <div className={formationClass}>
        <FootballField style={style}>
          <PlayerIcon className="player-no11 transition" number={11} ref={player11Ref} />
          <PlayerIcon className="player-no10 transition" number={10} ref={player10Ref} />
          <PlayerIcon className="player-no09 transition" number={9} ref={player09Ref} />
          <PlayerIcon className="player-no08 transition" number={8} ref={player08Ref} />
          <PlayerIcon className="player-no07 transition" number={7} ref={player07Ref} />
          <PlayerIcon className="player-no06 transition" number={6} ref={player06Ref} />
          <PlayerIcon className="player-no05 transition" number={5} ref={player05Ref} />
          <PlayerIcon className="player-no04 transition" number={4} ref={player04Ref} />
          <PlayerIcon className="player-no03 transition" number={3} ref={player03Ref} />
          <PlayerIcon className="player-no02 transition" number={2} ref={player02Ref} />
          <PlayerIcon className="player-no01" number={1} ref={player01Ref} />
        </FootballField>
      </div>
      <Select onChange={onChange} options={options} placeholder="フォーメーションを選択" />
    </>
  );
};
