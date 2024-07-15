"use client";

import { Post } from "@/components/Post";
import type { CSSProperties } from "react";

interface PageProps {
  slug: string;
}

export default function Page({ params }: { params: PageProps }) {
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
      <Post {...postProps} />
      <Post {...postProps} />
    </main>
  );
}

const baseStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  justifyContent: "center",
};
