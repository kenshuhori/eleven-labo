"use client";

import { getTheme } from "@/app/actions";
import { Comment } from "@/components/Comment";
import { CommentForm } from "@/components/CommentForm";
import { Post } from "@/components/Post";
import { ThemeHeader } from "@/components/ThemeHeader";
import { colorCode } from "@/constants";
import { comments } from "@/fixtures/comments";
import { defaultPost } from "@/fixtures/posts";
import { useAuth } from "@clerk/clerk-react";
import { type CSSProperties, Fragment } from "react";
import useSWR from "swr";

interface PageProps {
  postId: string;
  themeId: string;
}

export default function Page({ params }: { params: PageProps }) {
  const { postId, themeId } = params;

  const { isSignedIn } = useAuth();

  const { data: theme, error, isLoading } = useSWR(`themes/${themeId}`, getTheme);

  const postProps = { ...defaultPost, fullSentence: true, themeId };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main style={baseStyle}>
      {isLoading || theme === undefined ? (
        <div>Loading...</div>
      ) : (
        <>
          <ThemeHeader title={theme.title} />
          <div style={postStyle}>
            <Post {...postProps} />
          </div>
          <div style={commentsStyle}>
            {comments.map((comment) => {
              return (
                <Fragment key={comment.id}>
                  <div style={{ border: `1px dashed ${colorCode.gray}` }} />
                  <Comment {...comment} />
                </Fragment>
              );
            })}
          </div>
          {isSignedIn && <CommentForm postId={postProps.id} />}
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
