import { Skeleton } from "@chakra-ui/react";
import React from "react";
import { LikeIconButton } from "./LikeIconButton";

interface CommentFooterProps {
  count: number;
}

export const CommentFooter = ({ count }: CommentFooterProps) => {
  return (
    <LikeIconButton count={count} liked={false} onDecrement={() => {}} onIncrement={() => {}} />
  );
};

export const SkeletonCommentFooter = () => {
  return <Skeleton style={{ height: "1rem", width: "6rem" }} />;
};
