import { BestEleven } from "@/components/BestEleven";
import { SkeletonFormation } from "@/components/Formation";
import { PostFooter, SkeletonPostFooter } from "@/components/PostFooter";
import { PostHeader, SkeletonPostHeader } from "@/components/PostHeader";
import type { Eleven, PostWithPlayers } from "@/types";
import type { User } from "@prisma/client";
import type React from "react";

interface Props {
  author: User;
  commentCount: number;
  fullSentence: boolean;
  post: PostWithPlayers;
}

export const Post = ({ author, commentCount, fullSentence, post }: Props) => {
  const { createdAt, description, formationCode, id, likeHistories } = post;
  const eleven: Eleven = [
    { positionCode: 1, player: post.pos1Player },
    { positionCode: 2, player: post.pos2Player },
    { positionCode: 3, player: post.pos3Player },
    { positionCode: 4, player: post.pos4Player },
    { positionCode: 5, player: post.pos5Player },
    { positionCode: 6, player: post.pos6Player },
    { positionCode: 7, player: post.pos7Player },
    { positionCode: 8, player: post.pos8Player },
    { positionCode: 9, player: post.pos9Player },
    { positionCode: 10, player: post.pos10Player },
    { positionCode: 11, player: post.pos11Player },
    { positionCode: 11, player: post.pos11Player },
  ];

  return (
    <div style={baseStyle}>
      <PostHeader author={author} createdAt={createdAt} />
      <BestEleven formationCode={formationCode} eleven={eleven} style={formationStyle} />
      <PostFooter
        commentCount={commentCount}
        description={description}
        fullSentence={fullSentence}
        postId={id}
        likeHistories={likeHistories}
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
