"use client";

import { getPost, listCommentsByPostId } from "@/app/actions";
import { Comment, SkeletonComment } from "@/components/Comment";
import { CommentForm } from "@/components/CommentForm";
import { ErrorComponent } from "@/components/ErrorComponent";
import { Post, SkeletonPost } from "@/components/Post";
import { SkeletonThemeHeader, ThemeHeader } from "@/components/ThemeHeader";
import { colorCode } from "@/constants";
import { useAuth } from "@clerk/clerk-react";
import { type CSSProperties, Fragment } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr";

interface Props {
  postId: string;
}

export default function Page({ params }: { params: Props }) {
  const postId = params.postId;
  const {
    data: post,
    error: postError,
    isLoading: postIsLoading,
  } = useSWRImmutable(`/posts/${postId}`, getPost);
  const {
    data: comments,
    error: commentsError,
    isLoading: commentsIsLoading,
  } = useSWR(`/posts/${postId}/comments`, listCommentsByPostId);
  const commentCount = comments?.length ?? 0;

  const { isSignedIn } = useAuth();

  if (postError) {
    return <ErrorComponent />;
  }

  return (
    <main style={baseStyle}>
      {postIsLoading || post === undefined ? (
        <>
          <SkeletonThemeHeader />
          <div style={postStyle}>
            <SkeletonPost />
          </div>
        </>
      ) : (
        <>
          <ThemeHeader title={post.theme.title} />
          <div style={postStyle}>
            <Post
              author={post.author}
              commentCount={commentCount}
              fullSentence={true}
              post={post}
            />
          </div>
        </>
      )}
      <div style={commentsStyle}>
        {commentsIsLoading || comments === undefined ? (
          <>
            {[1, 2].map((idx) => {
              // ざっくり4つ分のスケルトンを表示
              return (
                <Fragment key={idx}>
                  <SkeletonComment />
                </Fragment>
              );
            })}
          </>
        ) : (
          <>
            {comments.map((comment) => {
              return (
                <Fragment key={comment.id}>
                  <div style={{ border: `1px dashed ${colorCode.gray}` }} />
                  <Comment {...comment} />
                </Fragment>
              );
            })}
          </>
        )}
      </div>
      {post && isSignedIn && <CommentForm postId={post.id} />}
    </main>
  );
}

const baseStyle: CSSProperties = {
  paddingTop: "8px",
};

const commentsStyle: CSSProperties = {
  display: "flex",
  padding: "1rem 1rem 2rem",
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
