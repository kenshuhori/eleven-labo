"use client";

import { getTheme } from "@/app/actions";
import { BottomButton } from "@/components/BottomButton";
import { Post, SkeletonPost } from "@/components/Post";
import { SkeletonThemeHeader, ThemeHeader } from "@/components/ThemeHeader";
import { posts } from "@/fixtures/posts";
import type { CSSProperties } from "react";
import { Fragment } from "react";
import useSWR from "swr";

interface PageProps {
  themeId: string;
}

export default function Page({ params }: { params: PageProps }) {
  const themeId = params.themeId;

  const { data: theme, error, isLoading } = useSWR(`/themes/${themeId}`, getTheme);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main style={baseStyle}>
      {isLoading || theme === undefined ? (
        <>
          <SkeletonThemeHeader />
          <div style={timelineStyle}>
            {[1, 2].map((i) => {
              return (
                <Fragment key={i}>
                  <SkeletonPost />
                </Fragment>
              );
            })}
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </main>
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
