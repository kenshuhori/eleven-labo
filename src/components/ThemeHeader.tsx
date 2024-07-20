import { colorCode } from "@/constants";
import type React from "react";

interface ThemeHeaderProps {
  title: string;
}

export const ThemeHeader = ({ title }: ThemeHeaderProps) => {
  return (
    <div style={baseStyle}>
      <h1 style={headerStyle}>{title}</h1>
    </div>
  );
};

const baseStyle: React.CSSProperties = {
  paddingBottom: "8px",
  paddingInline: "8px",
  width: "34rem",
};

const headerStyle: React.CSSProperties = {
  background: `linear-gradient(transparent 60%, ${colorCode.lightOrange} 100%)`,
  display: "inline",
  fontSize: "1.4rem",
  fontWeight: "700",
};
