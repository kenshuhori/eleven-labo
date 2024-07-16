"use client";

import { BottomButton } from "@/components/BottomButton";
import { Post } from "@/components/Post";
import { ThemeHeader } from "@/components/ThemeHeader";
import { posts } from "@/fixtures/posts";
import { defaultTheme } from "@/fixtures/themes";
import type { CSSProperties } from "react";
import { Fragment } from "react";

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
        {posts.map((post) => {
          return (
            <Fragment key={post.id}>
              <Post {...post} />
            </Fragment>
          );
        })}
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
