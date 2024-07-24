import { Formation, SkeletonFormation } from "@/components/Formation";
import { PostFooter, SkeletonPostFooter } from "@/components/PostFooter";
import { PostHeader, SkeletonPostHeader } from "@/components/PostHeader";
import type React from "react";

interface PostProps {
  createdAt: Date;
  description: string;
  formationCode: Formation["code"];
  fullSentence: boolean;
  id: number;
  likeCount: number;
}

export const Post = ({
  createdAt,
  description,
  formationCode,
  fullSentence,
  id,
  likeCount,
}: PostProps) => {
  const postUrl = `/posts/${id}`;

  return (
    <div style={baseStyle}>
      <PostHeader
        author={"John Doe"}
        authorImage={"https://example.com/john-doe.png"}
        createdAt={createdAt}
      />
      <Formation formationCode={formationCode} readonly={true} style={formationStyle} />
      <PostFooter
        commentCount={3}
        description={description}
        fullSentence={fullSentence}
        postUrl={postUrl}
        likeCount={likeCount}
      />
    </div>
  );
};

export const SkeletonPost = () => {
  return (
    <div style={baseStyle}>
      <SkeletonPostHeader />
      <SkeletonFormation />
      <SkeletonPostFooter />
    </div>
  );
};

const baseStyle: React.CSSProperties = {
  width: "34rem",
};

const formationStyle: React.CSSProperties = {
  position: "relative",
};
