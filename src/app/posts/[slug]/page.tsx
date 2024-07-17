"use client";

import { BottomForm } from "@/components/BottomForm";
import { Comment } from "@/components/Comment";
import { Post } from "@/components/Post";
import { ThemeHeader } from "@/components/ThemeHeader";
import { comments } from "@/fixtures/comments";
import { defaultPost } from "@/fixtures/posts";
import { defaultTheme } from "@/fixtures/themes";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { type CSSProperties, Fragment } from "react";

interface PageProps {
  slug: string;
}

export default function Page({ params }: { params: PageProps }) {
  const themeSlug = params.slug;

  const router = useRouter();
  const toast = useToast();

  const { isSignedIn } = useAuth();

  const theme: Theme = defaultTheme;

  const postProps = { ...defaultPost, fullSentence: true };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "コメントしました",
      position: "top",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

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
      {isSignedIn && <BottomForm label={"投稿"} onSubmit={onSubmit} />}
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
