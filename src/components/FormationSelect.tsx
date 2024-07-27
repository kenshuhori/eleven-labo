import { formations } from "@/fixtures/formations";
import type { Formation } from "@/types";
import { groupedFormations } from "@/utils/groupFormation";
import React, { type CSSProperties } from "react";
import Select from "react-select";

interface FormationSelectProps {
  formation: Formation;
  onChange: (selected: FormationSelectOption | null) => void;
  style?: CSSProperties;
}

export const FormationSelect = ({ formation, onChange, style }: FormationSelectProps) => {
  const groupedOptions: GroupedFormationSelectOption[] = groupedFormations(formations);

  const formatGroupLabel = (group: GroupedFormationSelectOption) => {
    return (
      <div>
        <span style={{ fontSize: "1rem" }}>{group.category}</span>
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
          padding: "1px",
        }}
      >
        <div>
          <span style={optionStyle}>{data.name}</span>
        </div>
      </div>
    ) : (
      <span style={optionStyle}>{data.name}</span>
    );
  };

  const defaultFormation: FormationSelectOption = {
    label: formation.name,
    value: formation.code,
    ...formation,
  };

  return (
    <div style={{ ...style }}>
      <Select<FormationSelectOption, false, GroupedFormationSelectOption>
        defaultValue={defaultFormation}
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

const optionStyle: CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 700,
  letterSpacing: "1px",
};
