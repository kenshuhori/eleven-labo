import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main style={baseStyle}>
      <h1>New Posts | Eleven Labo</h1>
    </main>
  );
}

const baseStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "400px",
  backgroundColor: "#f0f0f0",
};
