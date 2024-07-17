"use client";

import { BottomForm } from "@/components/BottomForm";
import { Comment } from "@/components/Comment";
import { Post } from "@/components/Post";
import { ThemeHeader } from "@/components/ThemeHeader";
import { comments } from "@/fixtures/comments";
import { defaultPost } from "@/fixtures/posts";
import { defaultTheme } from "@/fixtures/themes";
import { useAuth } from "@clerk/clerk-react";
import { type CSSProperties, Fragment } from "react";

interface PageProps {
  slug: string;
}

export default function Page({ params }: { params: PageProps }) {
  const themeSlug = params.slug;

  const { isSignedIn } = useAuth();

  const theme: Theme = defaultTheme;

  const postProps = { ...defaultPost, fullSentence: true };

  return (
    <main style={baseStyle}>
      <ThemeHeader title={theme.title} />
      <div style={postStyle}>
        <Post {...postProps} />
      </div>
      <div style={commentsStyle}>
        {comments.map((comment) => {
          return (
            <Fragment key={comment.id}>
              <div style={{ border: "1px dashed #DDDDDD" }} />
              <Comment {...comment} />
            </Fragment>
          );
        })}
      </div>
      {isSignedIn && <BottomForm label={"投稿"} />}
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
