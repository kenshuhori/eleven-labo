import fieldJpg from "@public/field.jpg";
import type React from "react";

interface FootballFieldProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const FootballField = ({ children, style }: FootballFieldProps) => (
  <div
    style={{
      alignItems: "center",
      backgroundImage: `url(${fieldJpg.src})`,
      backgroundSize: "cover",
      display: "flex",
      height: "36rem",
      justifyContent: "center",
      position: "absolute",
      width: "100%",
      ...style,
    }}
  >
    {children}
  </div>
);
