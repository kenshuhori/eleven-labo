import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main style={baseStyle}>
      <h1>About Us | Eleven Labo</h1>
    </main>
  );
}

const baseStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "500px",
  backgroundColor: "#f0f0f0",
};
