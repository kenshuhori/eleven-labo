import type React from "react";
import { FootballField } from "./FootballField";
import { PlayerIcon } from "./PlayerIcon";
import "@/styles/formations.css";

interface FormationProps {
  formation?: "4-3-3" | "4-4-2" | "3-4-3";
}

export const Formation = ({ formation }: FormationProps) => {
  const formationClass = `formation-${formation}`;

  return (
    <div className={formationClass}>
      <FootballField height="35rem" position="relative" width="35rem">
        <PlayerIcon className="player-no11" number={11} />
        <PlayerIcon className="player-no10" number={10} />
        <PlayerIcon className="player-no09" number={9} />
        <PlayerIcon className="player-no08" number={8} />
        <PlayerIcon className="player-no07" number={7} />
        <PlayerIcon className="player-no06" number={6} />
        <PlayerIcon className="player-no05" number={5} />
        <PlayerIcon className="player-no04" number={4} />
        <PlayerIcon className="player-no03" number={3} />
        <PlayerIcon className="player-no02" number={2} />
        <PlayerIcon className="player-no01" number={1} />
      </FootballField>
    </div>
  );
};
