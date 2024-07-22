"use client";

import { Comment } from "@/components/Comment";
import { CommentForm } from "@/components/CommentForm";
import { Post } from "@/components/Post";
import { ThemeHeader } from "@/components/ThemeHeader";
import { colorCode } from "@/constants";
import { comments } from "@/fixtures/comments";
import { defaultPost } from "@/fixtures/posts";
import { defaultTheme } from "@/fixtures/themes";
import { useAuth } from "@clerk/clerk-react";
import { type CSSProperties, Fragment } from "react";

interface PageProps {
  postId: string;
}

export default function Page({ params }: { params: PageProps }) {
<<<<<<<< HEAD:src/app/(service-page)/posts/[postId]/page.tsx
  const postId = params.postId;

  const { isSignedIn } = useAuth();

  const theme = defaultTheme;
========
  const postSlug = params.postId;

  console.log("postSlug", postSlug);

  const { isSignedIn } = useAuth();

  // const { data: theme, error, isLoading } = useSWR(`themes/${themeSlug}`, getTheme);

  const theme: Theme = defaultTheme;
>>>>>>>> a43dbfe (feat: slug を xxxIdへ):src/app/(service-page)/themes/[themeId]/posts/[postId]/page.tsx

  const postProps = { ...defaultPost, fullSentence: true, themeId: "2" };

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
              <div style={{ border: `1px dashed ${colorCode.gray}` }} />
              <Comment {...comment} />
            </Fragment>
          );
        })}
      </div>
      {isSignedIn && <CommentForm postId={postProps.id} />}
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
