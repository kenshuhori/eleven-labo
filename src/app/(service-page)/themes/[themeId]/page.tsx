"use client";

import { getTheme } from "@/app/actions";
import { BottomButton } from "@/components/BottomButton";
import { Post } from "@/components/Post";
import { ThemeHeader } from "@/components/ThemeHeader";
import { posts } from "@/fixtures/posts";
import { Skeleton } from "@chakra-ui/react";
import type { CSSProperties } from "react";
import { Fragment } from "react";
import useSWR from "swr";

interface PageProps {
  themeId: string;
}

export default function Page({ params }: { params: PageProps }) {
  const themeId = params.themeId;

  const theme = defaultTheme;

  return (
    <main style={baseStyle}>
      <ThemeHeader title={theme.title} />
      <div style={timelineStyle}>
        {posts.map((post) => {
          const postProps = { ...post, fullSentence: false };
          return (
            <Fragment key={post.id}>
              <Post {...postProps} />
            </Fragment>
          );
        })}
        <BottomButton label={"投稿"} href={`${themeId}/posts/new`} />
      </div>
    </main >
  );
}

const baseStyle: CSSProperties = {
  paddingTop: "8px",
};

const timelineStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  justifyContent: "center",
};
