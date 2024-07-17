"use client";

import { BottomButton } from "@/components/BottomButton";
import { Comment } from "@/components/Comment";
import { Post } from "@/components/Post";
import { ThemeHeader } from "@/components/ThemeHeader";
import { comments } from "@/fixtures/comments";
import { defaultPost } from "@/fixtures/posts";
import { defaultTheme } from "@/fixtures/themes";
import { type CSSProperties, Fragment } from "react";

interface PageProps {
  slug: string;
}

export default function Page({ params }: { params: PageProps }) {
  const themeSlug = params.slug;

  const theme: Theme = defaultTheme;

  return (
    <main style={baseStyle}>
      <ThemeHeader title={theme.title} />
      <div style={postStyle}>
        <Post {...defaultPost} />
      </div>
      <div style={commentsStyle}>
        {comments.map((comment) => {
          return (
            <Fragment key={comment.id}>
              <Comment {...comment} />
            </Fragment>
          );
        })}
      </div>
      {/* <BottomButton label={"コメント"} href={`${themeSlug}/posts/new`} /> */}
    </main>
  );
}

const baseStyle: CSSProperties = {
  paddingTop: "8px",
  paddingBottom: "8px",
};

const commentsStyle: CSSProperties = {
  padding: "8px 16px",
};

const postStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  justifyContent: "center",
};
