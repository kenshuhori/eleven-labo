import { PlayerSelectOptionsContext } from "@/app/(service-page)/template";
import { PositionLabel } from "@/components/PositionLabel";
import { colorCode } from "@/constants";
import type { PlayerSelectOption } from "@/types";
import type { Team } from "@prisma/client";
import React, { useContext, type CSSProperties } from "react";
import Select from "react-select";

interface Props {
  leagueId: string;
  onChange: (selected: PlayerSelectOption | null) => void;
  style?: CSSProperties;
  teamId: number | null;
}

export const PlayerSelect = ({ leagueId, onChange, style, teamId }: Props) => {
  const groupedOptions = useContext(PlayerSelectOptionsContext);
  const filteredOptions = groupedOptions.filter((option) => {
    if (teamId !== null) {
      return option.team.id === teamId;
    }

    return option.team.leagueId.toString() === leagueId;
  });

  const formatGroupLabel = (group: {
    team: Team;
    options: PlayerSelectOption[];
  }) => {
    return (
      <div style={{ alignItems: "center", display: "flex", gap: "0.8rem", marginTop: "1rem" }}>
        <img alt={group.team.name} src={group.team.logo} style={{ width: "2.7rem" }} />
        <span style={{ fontSize: "1.2rem" }}>{group.team.name}</span>
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
      <Select<PlayerSelectOption, false, { team: Team; options: PlayerSelectOption[] }>
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
