"use client";

import { getThemeWithPosts, listPostByThemeId } from "@/app/actions";
import { BottomButton } from "@/components/BottomButton";
import { ErrorComponent } from "@/components/ErrorComponent";
import { Post, SkeletonPost } from "@/components/Post";
import { SkeletonThemeHeader, ThemeHeader } from "@/components/ThemeHeader";
import type { CSSProperties } from "react";
import { Fragment } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr";

interface PageProps {
  themeId: string;
}

export default function Page({ params }: { params: PageProps }) {
  const themeId = params.themeId;

  const {
    data: theme,
    error: themeError,
    isLoading: themeIsLoading,
  } = useSWRImmutable(`/themes/${themeId}`, getThemeWithPosts);
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
      {themeIsLoading || theme === undefined || postsIsLoading || posts === undefined ? (
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
              return (
                <Fragment key={post.id}>
                  <Post commentCount={post.comments.length} fullSentence={false} post={post} />
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
