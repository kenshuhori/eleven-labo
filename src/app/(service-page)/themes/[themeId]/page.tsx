"use client";

import { getTheme, listPostByThemeId } from "@/app/actions";
import { BottomButton } from "@/components/BottomButton";
import { ErrorComponent } from "@/components/ErrorComponent";
import { Post, SkeletonPost } from "@/components/Post";
import { SkeletonThemeHeader, ThemeHeader } from "@/components/ThemeHeader";
import { NoData } from "@public/NoData";
import type { CSSProperties } from "react";
import { Fragment } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr";

interface Props {
  themeId: string;
}

export default function Page({ params }: { params: Props }) {
  const themeId = params.themeId;

  const {
    data: theme,
    error: themeError,
    isLoading: themeIsLoading,
  } = useSWRImmutable(`/themes/${themeId}`, getTheme);
  const {
    data: posts,
    error: postsError,
    isLoading: postsIsLoading,
  } = useSWR(`/themes/${themeId}/posts`, listPostByThemeId);

  if (themeError || postsError) {
    return <ErrorComponent />;
  }

  return (
    <main style={baseStyle}>
      {themeIsLoading || theme === undefined ? (
        <SkeletonThemeHeader />
      ) : (
        <ThemeHeader title={theme.title} />
      )}
      {postsIsLoading || posts === undefined ? (
        <div style={timelineStyle}>
          {[1, 2].map((i) => {
            return (
              <Fragment key={i}>
                <SkeletonPost />
              </Fragment>
            );
          })}
        </div>
      ) : (
        <div style={timelineStyle}>
          {posts.map((post) => {
            return (
              <Fragment key={post.id}>
                <Post
                  author={post.author}
                  commentCount={post.comments.length}
                  fullSentence={false}
                  post={post}
                />
              </Fragment>
            );
          })}
          {posts.length === 0 && <NoData />}
          <BottomButton label={"投稿"} href={`${themeId}/posts/new`} />
        </div>
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
