import { players } from "@/fixtures/players";
import { teams } from "@/fixtures/teams";
import { groupedPlayers } from "@/utils/groupPlayer";
import React, { type CSSProperties } from "react";
import Select from "react-select";

interface PlayerSelectProps {
  onChange: (selected: PlayerSelectOption | null) => void;
  style?: CSSProperties;
}

export const PlayerSelect = ({ onChange, style }: PlayerSelectProps) => {
  const groupedOptions: GroupedPlayerSelectOption[] = groupedPlayers(players, teams);

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
          padding: "1px",
        }}
      >
        <div>
          <span style={optionStyle}>{`${data.name} #${data.number}`}</span>
        </div>
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
            textShadow: `1px 1px ${data.team.textShadowColor}`,
            border: isFocused ? `3px solid ${data.team.borderColor}` : "none",
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
