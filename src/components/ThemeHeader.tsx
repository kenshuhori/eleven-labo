import type React from "react";

interface ThemeHeaderProps {
  title: string;
}

export const ThemeHeader = ({ title }: ThemeHeaderProps) => {
  return (
    <div style={baseStyle}>
      <div style={headerStyle}>{title}</div>
    </div>
  );
};

const baseStyle: React.CSSProperties = {
  width: "34rem",
};

const headerStyle: React.CSSProperties = {
  fontSize: "1.6rem",
  fontWeight: "700",
  paddingBlock: "8px",
  paddingInline: "8px",
};
