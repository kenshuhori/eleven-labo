import { colorCode } from "@/constants";
import type { Metadata } from "next";
import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main style={baseStyle}>
      <h1>404 Not Found | Eleven Labo</h1>
    </main>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: "404 Not Found | Eleven Labo",
  };
}

const baseStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "500px",
  backgroundColor: colorCode.lightGray,
};
