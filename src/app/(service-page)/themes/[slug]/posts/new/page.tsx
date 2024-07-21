import { PostForm } from "@/components/PostForm";
import { defaultTheme } from "@/fixtures/themes";
import type { CSSProperties } from "react";

interface PageProps {
  slug: string;
}

export default function Page({ params }: { params: PageProps }) {
  const themeId = params.slug;
  const theme: Theme = defaultTheme;

  return (
    <main style={baseStyle}>
      <PostForm theme={theme} />
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
