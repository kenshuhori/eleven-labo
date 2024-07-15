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
        <span>{group.category}</span>
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
          padding: "2px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "2px",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            {`${data.name} #${data.number}`}
          </span>
        </div>
      </div>
    ) : (
      <span>{`${data.name} #${data.number}`}</span>
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
