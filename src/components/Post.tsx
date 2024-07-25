import { Formation, SkeletonFormation } from "@/components/Formation";
import { PostFooter, SkeletonPostFooter } from "@/components/PostFooter";
import { PostHeader, SkeletonPostHeader } from "@/components/PostHeader";
import type { Post as PrismaPost } from "@prisma/client";
import type React from "react";

type PostProps = {
  fullSentence: boolean;
} & PrismaPost;

export const Post = ({
  createdAt,
  description,
  formationCode,
  fullSentence,
  id,
  likeCount,
  pos1PlayerId,
  pos2PlayerId,
  pos3PlayerId,
  pos4PlayerId,
  pos5PlayerId,
  pos6PlayerId,
  pos7PlayerId,
  pos8PlayerId,
  pos9PlayerId,
  pos10PlayerId,
  pos11PlayerId,
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
