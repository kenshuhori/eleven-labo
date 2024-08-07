import type React from "react";
import { type CSSProperties, useState } from "react";
import { FootballField } from "./FootballField";
import "@/styles/formations.css";
import { PlayerIconSwitcher } from "@/components/PlayerIconSwitcher";
import { colorCode } from "@/constants";
import { formations } from "@/fixtures/formations";
import type { Eleven } from "@/types";
import type { Team } from "@prisma/client";

interface Props {
  formationCode: string;
  eleven: Eleven;
  style?: React.CSSProperties;
}

export const BestEleven = ({ formationCode, eleven, style }: Props) => {
  const formationClass = `formation-${formationCode}`;
  const formation =
    formations.find((formation) => formation.code === formationCode) || formations[0];
  const [iconMode, setIconMode] = useState<"number" | "photo">("number");
  const switchIconMode = () => setIconMode(iconMode === "number" ? "photo" : "number");

  return (
    <div className={formationClass}>
      <FootballField style={style}>
        {eleven.map(({ positionCode, player }, idx) => {
          const className = `player-no${positionCode} transition`;

          return (
            <div className={className} key={`${positionCode}-${player.id}-${idx}`}>
              <div style={contentStyle}>
                <div style={playerIconStyle(player.team)}>
                  {iconMode === "photo" ? (
                    <img alt={player.name} src={player.photo} style={{ borderRadius: "50%" }} />
                  ) : (
                    <div style={numberStyle}>{player.number ?? "？"}</div>
                  )}
                </div>
                <label style={playerNameStyle}>{player.name}</label>
              </div>
            </div>
          );
        })}

        <PlayerIconSwitcher onChange={switchIconMode} />

        <div style={formationBaseStyle}>
          <button style={formationNameStyle} type="button">
            {formation.name}
          </button>
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

const numberStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  widows: "100%",
};

const playerIconStyle = (team: Team): CSSProperties => {
  return {
    backgroundColor: team.backgroundColor,
    border: `3px solid ${team.borderColor}`,
    borderRadius: "50%",
    color: team.color,
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
  textShadow: `3px 3px ${colorCode.black}`,
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
  borderRadius: "0.5rem",
  color: colorCode.black,
  cursor: "default",
  fontSize: "1.1rem",
  fontWeight: "500",
  height: "3.5rem",
  textShadow: `1px 1px 1px ${colorCode.lightOrange}`,
  width: "12rem",
};
