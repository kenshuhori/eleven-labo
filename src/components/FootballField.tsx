import fieldSvg from "@public/field.svg";
import type React from "react";

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const FootballField = ({ children, style }: Props) => (
  <div
    style={{
      alignItems: "center",
      backgroundImage: `url(${fieldSvg.src})`,
      backgroundSize: "cover",
      display: "flex",
      height: "30rem",
      justifyContent: "center",
      position: "relative",
      width: "100%",
      ...style,
    }}
  >
    {children}
  </div>
);
