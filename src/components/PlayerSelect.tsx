import { players } from "@/fixtures/players";
import React, { type CSSProperties } from "react";
import Select from "react-select";

interface PlayerSelectProps {
  onChange: (selected: PlayerSelectOption | null) => void;
  style?: CSSProperties;
}

export const PlayerSelect = ({ onChange, style }: PlayerSelectProps) => {
  const options: PlayerSelectOption[] = players.map((player, index) => ({
    value: `player_${index}`,
    label: player.name,
    ...player,
  }));

  const formatOptionLabel = (
    data: PlayerSelectOption,
    { context }: { context: "menu" | "value" },
  ): JSX.Element => {
    return context === "menu" ? (
      <div
        style={{
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "8px",
        }}
      >
        <div>
          <span
            style={{
              color: "#DDDDDD",
              fontFamily: "Noto Sans JP",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "150%",
              letterSpacing: "0.8px",
            }}
          >
            {data.name}
          </span>
          <span
            style={{
              color: "#DDDDDD",
              fontFamily: "Noto Sans JP",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "150%",
              letterSpacing: "0.6px",
            }}
          >
            {data.team.name}
          </span>
        </div>
        <div>
          <span
            style={{
              color: "#DDDDDD",
              fontFamily: "Noto Sans JP",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "150%",
              letterSpacing: "0.6px",
              marginRight: "8px",
            }}
          >
            {"あいうえお"}
          </span>
          <span
            style={{
              color: "#DDDDDD",
              fontFamily: "Noto Sans JP",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "150%",
              letterSpacing: "0.6px",
            }}
          >
            {"かきくけこ"}
          </span>
        </div>
      </div>
    ) : (
      <span
        style={{
          color: "#DDDDDD",
          fontFamily: "Noto Sans JP",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "150%",
        }}
      >
        {"さしすせそ"}
      </span>
    );
  };

  return (
    <div style={{ ...style }}>
      <Select<
        PlayerSelectOption,
        false,
        {
          line: string;
          options: PlayerSelectOption[];
        }
      >
        formatOptionLabel={formatOptionLabel}
        onChange={onChange}
        options={options}
        placeholder="選手を選択"
      />
    </div>
  );
};
