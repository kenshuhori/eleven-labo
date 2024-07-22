"use client";

import { getTheme } from "@/app/actions";
import { PostForm } from "@/components/PostForm";
import type { CSSProperties } from "react";
import useSWR from "swr";

interface PageProps {
  themeId: string;
}

export default function Page({ params }: { params: PageProps }) {
  const themeId = params.themeId;
  const theme = defaultTheme;

  return (
    <main style={baseStyle}>
      {isLoading || theme === undefined ? <div>Loading...</div> : <PostForm theme={theme} />}
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
