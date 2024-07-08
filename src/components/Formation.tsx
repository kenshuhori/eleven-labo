import type React from "react";
import { FootballField } from "./FootballField";
import { PlayerIcon } from "./PlayerIcon";
import "@/styles/formations.css";

interface FormationProps {
  formation?: "4-3-3" | "4-4-2";
}

export const Formation = ({ formation }: FormationProps) => {
  const formationClass = `formation-${formation}`;

  return (
    <div className={formationClass}>
      <FootballField height="35rem" position="relative" width="35rem">
        <PlayerIcon className="player-no11" />
        <PlayerIcon className="player-no10" />
        <PlayerIcon className="player-no09" />
        <PlayerIcon className="player-no08" />
        <PlayerIcon className="player-no07" />
        <PlayerIcon className="player-no06" />
        <PlayerIcon className="player-no05" />
        <PlayerIcon className="player-no04" />
        <PlayerIcon className="player-no03" />
        <PlayerIcon className="player-no02" />
        <PlayerIcon className="player-no01" />
      </FootballField>
    </div>
  );
};
