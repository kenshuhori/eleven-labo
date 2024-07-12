import type { CSSProperties } from "react";

interface PageProps {
  slug: string;
}

export default function Page({ params }: { params: PageProps }) {
  return (
    <main style={baseStyle}>
      <div>{`テーマ${params.slug}`}</div>
    </main>
  );
}

const baseStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  gap: "10px",
  justifyContent: "center",
};
