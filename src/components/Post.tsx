import { Formation } from "@/components/Formation";
import { PostFooter } from "@/components/PostFooter";
import { PostHeader } from "@/components/PostHeader";
import { defaultFormation } from "@/fixtures/formations";
import type React from "react";

interface PostProps {
  author: string;
  authorImage: string;
  createdAt: string;
  commentCount: number;
  description: string;
  postUrl: string;
  likeCount: number;
}

export const Post = ({
  author,
  authorImage,
  createdAt,
  commentCount,
  description,
  postUrl,
  likeCount,
}: PostProps) => {
  return (
    <div style={baseStyle}>
      <PostHeader author={author} authorImage={authorImage} createdAt={createdAt} />
      <Formation formation={defaultFormation} style={formationStyle} />
      <PostFooter
        commentCount={commentCount}
        description={description}
        postUrl={postUrl}
        likeCount={likeCount}
      />
    </div>
  );
};

const baseStyle: React.CSSProperties = {
  width: "34rem",
};

const formationStyle: React.CSSProperties = {
  position: "relative",
};
