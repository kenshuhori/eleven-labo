"use client";

import { getTheme } from "@/app/actions";
import { ErrorComponent } from "@/components/ErrorComponent";
import { PostForm, SkeletonPostForm } from "@/components/PostForm";
import type { CSSProperties } from "react";
import useSWR from "swr";

interface Props {
  themeId: string;
}

export default function Page({ params }: { params: Props }) {
  const { themeId } = params;
  const { data: theme, error, isLoading } = useSWR(`/themes/${themeId}`, getTheme);

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <main style={baseStyle}>
      {isLoading || theme === undefined ? <SkeletonPostForm /> : <PostForm theme={theme} />}
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
