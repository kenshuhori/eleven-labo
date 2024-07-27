import type React from "react";
import type { CSSProperties } from "react";
import { FootballField } from "./FootballField";
import "@/styles/formations.css";
import { colorCode } from "@/constants";
import type { Eleven } from "@/types";
import { Button } from "@chakra-ui/react";
import type { Team } from "@prisma/client";

interface BestElevenProps {
  formationCode: Formation["code"];
  eleven: Eleven;
  style?: React.CSSProperties;
}

export const BestEleven = ({ formationCode, eleven, style }: BestElevenProps) => {
  const formationClass = `formation-${formationCode}`;

  return (
    <div className={formationClass}>
      <FootballField style={style}>
        {eleven.map(({ positionCode, player }) => {
          const className = `player-no${positionCode} transition`;

          return (
            <div className={className} key={player.id}>
              <div style={contentStyle}>
                <button style={playerIconStyle(player.team)} type="button">
                  {player.number}
                </button>
                <label style={playerNameStyle}>{player.name}</label>
              </div>
            </div>
          );
        })}

        <div style={formationBaseStyle}>
          <Button style={formationNameStyle} type="button">
            {formationCode}
          </Button>
        </div>
      </FootballField>
    </div>
  );
};

const contentStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
};

const playerIconStyle = (team: Team): CSSProperties => {
  return {
    backgroundColor: team.backgroundColor,
    border: `3px solid ${team.borderColor}`,
    borderRadius: "50%",
    color: team.color,
    cursor: "default",
    fontFamily: "__Inter_aaf875",
    fontSize: "1.4rem",
    fontWeight: "1000",
    height: "3.5rem",
    textShadow: team.textShadowColor ? `1px 1px ${team.textShadowColor}` : "unset",
    filter: `drop-shadow(2px 4px 2px ${colorCode.black})`,
    width: "3.5rem",
  };
};

const playerNameStyle: CSSProperties = {
  color: colorCode.white,
  fontSize: "1.0rem",
  fontWeight: "1000",
  lineHeight: "1.2",
  textAlign: "center",
  textShadow: `2px 2px ${colorCode.black}`,
  width: "7rem",
};

const formationBaseStyle: CSSProperties = {
  bottom: "1rem",
  position: "absolute",
  right: "0.7rem",
  filter: `drop-shadow(4px 4px 4px ${colorCode.black})`,
};

const formationNameStyle: CSSProperties = {
  backgroundColor: colorCode.white,
  border: `2px solid ${colorCode.lightOrange}`,
  color: colorCode.black,
  cursor: "default",
  fontSize: "1.1rem",
  height: "3.5rem",
  textShadow: `1px 1px 1px ${colorCode.lightOrange}`,
  width: "12rem",
};
