import { PlayerSelectOptionsContext } from "@/app/(service-page)/template";
import { PositionLabel } from "@/components/PositionLabel";
import { colorCode } from "@/constants";
import type { PlayerSelectOption } from "@/types";
import type { Team } from "@prisma/client";
import React, { useContext, type CSSProperties } from "react";
import Select from "react-select";

interface PlayerSelectProps {
  onChange: (selected: PlayerSelectOption | null) => void;
  style?: CSSProperties;
}

export const PlayerSelect = ({ onChange, style }: PlayerSelectProps) => {
  const groupedOptions = useContext(PlayerSelectOptionsContext);
  const filteredOptions = groupedOptions.filter((option) => {
    // TODO: リーグを選択できるようにする
    return option.leagueId === 38;
  });

  const formatGroupLabel = (group: {
    teamName: string;
    leagueId: number;
    options: PlayerSelectOption[];
  }) => {
    return (
      <div style={{ marginTop: "1rem" }}>
        <span style={{ fontSize: "1.2rem" }}>{group.teamName}</span>
      </div>
    );
  };

  const formatOptionLabel = (
    data: PlayerSelectOption,
    { context }: { context: "menu" | "value" },
  ): JSX.Element => {
    return context === "menu" ? (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <span style={numberStyle(data.team)}>{data.number ?? "？"}</span>
          <span style={optionStyle}>{data.name}</span>
        </div>
        <PositionLabel position={data.position} />
      </div>
    ) : (
      <span style={optionStyle}>{`${data.name} #${data.number}`}</span>
    );
  };

  return (
    <div style={{ ...style }}>
      <Select<
        PlayerSelectOption,
        false,
        { teamName: string; leagueId: number; options: PlayerSelectOption[] }
      >
        filterOption={(option, rawInput) => {
          const { name, number, team } = option.data;
          return (
            name.toLowerCase().includes(rawInput.toLowerCase()) ||
            String(number).includes(rawInput) ||
            team.name.toLowerCase().includes(rawInput.toLowerCase())
          );
        }}
        formatGroupLabel={formatGroupLabel}
        formatOptionLabel={formatOptionLabel}
        menuIsOpen={true}
        onChange={onChange}
        options={filteredOptions}
        placeholder="選手を選択"
      />
    </div>
  );
};

const optionStyle: CSSProperties = {
  fontSize: "1.4rem",
  fontWeight: 700,
  height: "2.4rem",
  letterSpacing: "0.8px",
  lineHeight: "2.6rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  width: "17rem",
};

const numberStyle = (team: Team): CSSProperties => {
  return {
    backgroundColor: team.backgroundColor,
    border: `2px solid ${team.borderColor}`,
    borderRadius: "50%",
    color: team.color,
    fontSize: "1.3rem",
    fontWeight: "700",
    height: "2.5rem",
    lineHeight: "2.2rem",
    textAlign: "center",
    filter: `drop-shadow(2px 4px 2px ${colorCode.black})`,
    width: "2.5rem",
  };
};
