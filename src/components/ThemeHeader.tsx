import { colorCode } from "@/constants";
import { Skeleton } from "@chakra-ui/react";
import type React from "react";

interface Props {
  title: string;
}

export const ThemeHeader = ({ title }: Props) => {
  return (
    <div style={baseStyle}>
      <h1 style={headerStyle}>{title}</h1>
    </div>
  );
};

export const SkeletonThemeHeader = () => {
  return (
    <div style={baseStyle}>
      <Skeleton style={{ height: "4rem" }} />
    </div>
  );
};

const baseStyle: React.CSSProperties = {
  paddingBottom: "0.4rem",
  paddingInline: "0.5rem",
  maxWidth: "36rem",
  minHeight: "4rem",
};

const headerStyle: React.CSSProperties = {
  background: `linear-gradient(transparent 60%, ${colorCode.lightOrange} 100%)`,
  display: "inline",
  fontSize: "1.4rem",
  fontWeight: "700",
};
