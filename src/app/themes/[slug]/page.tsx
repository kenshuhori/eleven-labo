"use client";

import { BottomButton } from "@/components/BottomButton";
import { Post } from "@/components/Post";
import { ThemeHeader } from "@/components/ThemeHeader";
import { defaultTheme } from "@/fixtures/themes";
import type { CSSProperties } from "react";

interface PageProps {
  slug: string;
}

export default function Page({ params }: { params: PageProps }) {
  const themeSlug = params.slug;

  const theme: Theme = defaultTheme;

  const postProps = {
    author: "John Doe",
    authorImage: "https://example.com/john-doe.png",
    createdAt: "2024-01-01T00:00:00Z",
    commentCount: 8,
    description:
      "4-1-2-3で考えました。まずキーハーがXXXXなのは言うまでもありません。右SBはリヴァプールで今シーズン台頭したブラッドリーを選出したいと思います。",
    postUrl: "/posts/1",
    likeCount: 12,
  };
  return (
    <main style={baseStyle}>
      <ThemeHeader title={theme.title} />
      <div style={timelineStyle}>
        <Post {...postProps} />
        <Post {...postProps} />
        <BottomButton label={"投稿"} href={`${themeSlug}/posts/new`} />
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
