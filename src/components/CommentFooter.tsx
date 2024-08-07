import { CommentLikeIconButton } from "@/components/CommentLikeIconButton";
import { Skeleton } from "@chakra-ui/react";
import type { CommentLikeHistory } from "@prisma/client";
import React from "react";

interface Props {
  commentId: number;
  likeHistories: CommentLikeHistory[];
}

export const CommentFooter = ({ commentId, likeHistories }: Props) => {
  return <CommentLikeIconButton commentId={commentId} likeHistories={likeHistories} />;
};

export const SkeletonCommentFooter = () => {
  return <Skeleton style={{ height: "1rem", width: "6rem" }} />;
};
