import fieldJpg from "@public/field.jpg";
import type React from "react";

interface FootballFieldProps {
  children?: React.ReactNode;
  height?: string;
  position?: React.CSSProperties["position"];
  width?: string;
}

export const FootballField = ({
  children,
  height,
  position,
  width,
}: FootballFieldProps) => (
  <div
    style={{
      alignItems: "center",
      backgroundImage: `url(${fieldJpg.src})`,
      backgroundSize: "cover",
      display: "flex",
      height: height ?? "36rem",
      justifyContent: "center",
      position: position ?? "absolute",
      width: width ?? "100%",
    }}
  >
    {children}
  </div>
);
