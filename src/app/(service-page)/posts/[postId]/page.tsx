"use client";

import { getPost } from "@/app/actions";
import { Comment } from "@/components/Comment";
import { CommentForm } from "@/components/CommentForm";
import { ErrorComponent } from "@/components/ErrorComponent";
import { Post, SkeletonPost } from "@/components/Post";
import { SkeletonThemeHeader, ThemeHeader } from "@/components/ThemeHeader";
import { colorCode } from "@/constants";
import { useAuth } from "@clerk/clerk-react";
import { type CSSProperties, Fragment } from "react";
import useSWRImmutable from "swr";

interface PageProps {
  postId: string;
}

export default function Page({ params }: { params: PageProps }) {
  const postId = params.postId;
  const { data, error, isLoading } = useSWRImmutable(`/posts/${postId}`, getPost);

  const { isSignedIn } = useAuth();

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <main style={baseStyle}>
      {isLoading || data === undefined ? (
        <>
          <SkeletonThemeHeader />
          <div style={postStyle}>
            <SkeletonPost />
          </div>
        </>
      ) : (
        <>
          <ThemeHeader title={data.theme.title} />
          <div style={postStyle}>
            <Post fullSentence={true} post={data} />
          </div>
          <div style={commentsStyle}>
            {data.comments.map((comment) => {
              return (
                <Fragment key={comment.id}>
                  <div style={{ border: `1px dashed ${colorCode.gray}` }} />
                  <Comment {...comment} />
                </Fragment>
              );
            })}
          </div>
          {isSignedIn && <CommentForm postId={data.id} />}
        </>
      )}
    </main>
  );
}

const baseStyle: CSSProperties = {
  paddingTop: "8px",
};

const commentsStyle: CSSProperties = {
  display: "flex",
  padding: "1rem 1rem 3rem",
  flexDirection: "column",
  gap: "1.5rem",
};

const postStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  justifyContent: "center",
};
