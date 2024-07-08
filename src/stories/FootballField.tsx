import fieldJpg from "@public/field.jpg";
import type React from "react";

interface FootballFieldProps {
  children?: React.ReactNode;
  height?: string;
  width?: string;
}

export const FootballField = ({
  children,
  height,
  width,
}: FootballFieldProps) => (
  <div
    style={{
      alignItems: "center",
      backgroundImage: `url(${fieldJpg.src})`,
      backgroundSize: "cover",
      display: "flex",
      height: height ?? "30rem",
      justifyContent: "center",
      position: "absolute",
      width: width ?? "100%",
    }}
  >
    {children}
  </div>
);
