"use client";

import { BottomButton } from "@/components/BottomButton";
import { Post } from "@/components/Post";
import { ThemeHeader } from "@/components/ThemeHeader";
import { defaultPost } from "@/fixtures/posts";
import { defaultTheme } from "@/fixtures/themes";
import type { CSSProperties } from "react";

interface PageProps {
  slug: string;
}

export default function Page({ params }: { params: PageProps }) {
  const themeSlug = params.slug;

  const theme: Theme = defaultTheme;

  return (
    <main style={baseStyle}>
      <ThemeHeader title={theme.title} />
      <div style={timelineStyle}>
        <Post {...defaultPost} />
        <BottomButton label={"コメント"} href={`${themeSlug}/posts/new`} />
      </div>
    </main>
  );
}

const baseStyle: CSSProperties = {
  paddingTop: "8px",
  paddingBottom: "8px",
};

const timelineStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  justifyContent: "center",
};
