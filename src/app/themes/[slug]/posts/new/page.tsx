import { PostForm } from "@/components/PostForm";
import type { CSSProperties } from "react";

interface PageProps {
  slug: string;
}

export default function Page({ params }: { params: PageProps }) {
  const themeId = params.slug;

  return (
    <main style={baseStyle}>
      <PostForm theme={"2022年W杯のベスト11を考えよう!"} />
    </main>
  );
}

const baseStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  justifyContent: "center",
  paddingTop: "8px",
  paddingBottom: "8px",
};
