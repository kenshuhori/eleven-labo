import fieldJpg from "@public/field.jpg";
import React, { type CSSProperties } from "react";

interface FootballFieldProps {
  height?: number;
  width?: number;
}

export const FootballField = ({ height, width }: FootballFieldProps) => (
  <>
    <div
      style={{
        backgroundImage: `url(${fieldJpg.src})`,
        backgroundSize: "cover",
        height: `${height ?? 390}px`,
        width: `${width ?? 390}px`,
      }}
    />
  </>
);
