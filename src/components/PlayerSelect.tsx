import { PlayerSelectOptionsContext } from "@/app/(service-page)/template";
import { colorCode } from "@/constants";
import type { PlayerSelectOption } from "@/types";
import { Image } from "@chakra-ui/react";
import type { Team } from "@prisma/client";
import React, { useContext, type CSSProperties } from "react";
import Select from "react-select";

interface PlayerSelectProps {
  onChange: (selected: PlayerSelectOption | null) => void;
  style?: CSSProperties;
}

export const PlayerSelect = ({ onChange, style }: PlayerSelectProps) => {
  const groupedOptions = useContext(PlayerSelectOptionsContext);

  const formatGroupLabel = (group: { category: string; options: PlayerSelectOption[] }) => {
    return (
      <div style={{ marginTop: "1rem" }}>
        <span style={{ fontSize: "1.2rem" }}>{group.category}</span>
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
        {/* <span>{data.position ?? "？"}</span> */}
      </div>
    ) : (
      <span style={optionStyle}>{`${data.name} #${data.number}`}</span>
    );
  };

  return (
    <div style={{ ...style }}>
      <Select<PlayerSelectOption, false, { category: string; options: PlayerSelectOption[] }>
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
        options={groupedOptions}
        placeholder="選手を選択"
      />
    </div>
  );
};

const optionStyle: CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: 700,
  height: "3rem",
  letterSpacing: "1px",
  lineHeight: "2.8rem",
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
    fontSize: "1.4rem",
    fontWeight: "700",
    height: "2.8rem",
    lineHeight: "2.5rem",
    textAlign: "center",
    filter: `drop-shadow(2px 4px 2px ${colorCode.black})`,
    width: "2.8rem",
  };
};
