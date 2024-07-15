import type { CSSProperties } from "react";

interface PageProps {
  slug: string;
}

export default function Page({ params }: { params: PageProps }) {
  return (
    <main style={baseStyle}>
      <h1>Posts | Eleven Labo</h1>
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
