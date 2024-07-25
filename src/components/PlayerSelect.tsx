import { colorCode } from "@/constants";
import { Image } from "@chakra-ui/react";
import type { Team } from "@prisma/client";
import React, { useContext, type CSSProperties } from "react";
import Select from "react-select";
import { PlayerSelectOptionsContext } from "./Formation";

interface PlayerSelectProps {
  onChange: (selected: PlayerSelectOption | null) => void;
  style?: CSSProperties;
}

export const PlayerSelect = ({ onChange, style }: PlayerSelectProps) => {
  const groupedOptions = useContext(PlayerSelectOptionsContext);

  const formatGroupLabel = (group: GroupedPlayerSelectOption) => {
    return (
      <div>
        <span style={{ fontSize: "1rem" }}>{group.category}</span>
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
            gap: "0.5rem",
          }}
        >
          <Image src={data.photo} loading={"lazy"} style={{ height: "2rem", width: "2rem" }} />
          <span style={optionStyle}>{data.name}</span>
        </div>
        <span style={numberStyle(data.team)}>{data.number}</span>
      </div>
    ) : (
      <span style={optionStyle}>{`${data.name} #${data.number}`}</span>
    );
  };

  return (
    <div style={{ ...style }}>
      <Select<PlayerSelectOption, false, GroupedPlayerSelectOption>
        formatGroupLabel={formatGroupLabel}
        formatOptionLabel={formatOptionLabel}
        menuIsOpen={true}
        onChange={onChange}
        options={groupedOptions}
        placeholder="選手を選択"
        styles={{
          control: (base) => ({ ...base }),
          option: (base, { data, isFocused }) => ({
            ...base,
            backgroundColor: data.team.backgroundColor,
            color: data.team.color,
            filter: isFocused ? `drop-shadow(0px 1px 3px ${colorCode.black})` : "none",
          }),
        }}
      />
    </div>
  );
};

const optionStyle: CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 700,
  letterSpacing: "1px",
};

const numberStyle = (team: Team): CSSProperties => {
  return {
    backgroundColor: team.backgroundColor,
    border: `2px solid ${team.borderColor}`,
    borderRadius: "50%",
    color: team.color,
    fontSize: "1.1rem",
    fontWeight: "700",
    height: "2rem",
    textAlign: "center",
    filter: `drop-shadow(2px 4px 2px ${colorCode.black})`,
    width: "2rem",
  };
};
