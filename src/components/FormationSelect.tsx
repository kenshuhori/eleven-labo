import { formations } from "@/fixtures/formations";
import React, { type CSSProperties } from "react";
import Select from "react-select";

interface FormationSelectProps {
  onChange: (selected: FormationSelectOption | null) => void;
  style?: CSSProperties;
}

export const FormationSelect = ({ onChange, style }: FormationSelectProps) => {
  const options: FormationSelectOption[] = formations.map((formation, index) => ({
    value: formation.code,
    label: formation.name,
    ...formation,
  }));

  const formatOptionLabel = (
    data: FormationSelectOption,
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
              color: "#000000",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "150%",
              letterSpacing: "0.8px",
            }}
          >
            {data.name}
          </span>
        </div>
      </div>
    ) : (
      <span>{data.name}</span>
    );
  };

  return (
    <div style={{ ...style }}>
      <Select<
        FormationSelectOption,
        false,
        {
          line: string;
          options: FormationSelectOption[];
        }
      >
        formatOptionLabel={formatOptionLabel}
        onChange={onChange}
        options={options}
        placeholder="フォーメーションを選択"
      />
    </div>
  );
};
