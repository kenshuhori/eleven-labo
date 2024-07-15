import { formations } from "@/fixtures/formations";
import { groupedFormations } from "@/utils/groupFormation";
import React, { type CSSProperties } from "react";
import Select from "react-select";

interface FormationSelectProps {
  onChange: (selected: FormationSelectOption | null) => void;
  style?: CSSProperties;
}

export const FormationSelect = ({ onChange, style }: FormationSelectProps) => {
  const groupedOptions: GroupedFormationSelectOption[] = groupedFormations(formations);

  const formatGroupLabel = (group: GroupedFormationSelectOption) => {
    return (
      <div>
        <span>{group.category}</span>
      </div>
    );
  };

  const formatOptionLabel = (
    data: FormationSelectOption,
    { context }: { context: "menu" | "value" },
  ): JSX.Element => {
    return context === "menu" ? (
      <div
        style={{
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          justifyContent: "center",
          padding: "2px",
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
      <Select<FormationSelectOption, false, GroupedFormationSelectOption>
        formatGroupLabel={formatGroupLabel}
        formatOptionLabel={formatOptionLabel}
        menuIsOpen={true}
        onChange={onChange}
        options={groupedOptions}
        placeholder="フォーメーションを選択"
      />
    </div>
  );
};
