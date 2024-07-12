import { players } from "@/fixtures/players";
import React, { useCallback, useState, type CSSProperties } from "react";
import Select from "react-select";

interface PlayerSelectProps {
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  number?: number;
  textShadowColor?: string;
}

export const PlayerSelect = ({
  backgroundColor,
  borderColor,
  color,
  number,
  textShadowColor,
}: PlayerSelectProps) => {
  const defaultPlayer: Player = {
    name: "???",
    number: number ?? 99,
    team: {
      code: "default",
      name: "Default",
      backgroundColor: backgroundColor ?? "#FFFFFF",
      borderColor: borderColor ?? "#000000",
      color: color ?? "#000000",
      textShadowColor: textShadowColor ?? null,
    },
  };

  type Option = {
    value: string;
    label: string;
  } & Player;
  const [player, setPlayer] = useState<Player>(defaultPlayer);
  const onChange = useCallback((selected: Option | null) => {
    setPlayer({
      name: selected?.name ?? "???",
      number: selected?.number ?? 0,
      team: {
        code: selected?.team.code ?? "???",
        name: selected?.team.name ?? "???",
        backgroundColor: selected?.team.backgroundColor ?? "#FFFFFF",
        borderColor: selected?.team.borderColor ?? "#000000",
        color: selected?.team.color ?? "#000000",
        textShadowColor: selected?.team.textShadowColor ?? null,
      },
    });
  }, []);
  const options: Option[] = players.map((player, index) => ({
    value: `player_${index}`,
    label: player.name,
    ...player,
  }));

  const formatGroupLabel = ({
    line,
  }: {
    line: string;
    options: Option[];
  }): JSX.Element => {
    return (
      <div
        style={{
          padding: "8px",
          alignItems: "center",
          alignSelf: "stretch",
        }}
      >
        <span
          style={{
            color: "#EEEEEE",
            fontFamily: "Noto Sans JP",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "100%",
          }}
        >
          {line}
        </span>
      </div>
    );
  };

  const formatOptionLabel = (
    data: Option,
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
    <div style={baseStyle}>
      <Select<
        Option,
        false,
        {
          line: string;
          options: Option[];
        }
      >
        onChange={onChange}
        options={options}
        placeholder="選手を選択"
      />
    </div>
  );
};

const baseStyle: CSSProperties = {
  width: "auto",
};
