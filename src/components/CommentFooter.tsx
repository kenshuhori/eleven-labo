import React from "react";
import { LikeIconButton } from "./LikeIconButton";

interface CommentFooterProps {
  count: number;
}

export const CommentFooter = ({ count }: CommentFooterProps) => {
  return <LikeIconButton count={count} liked={false} />;
};
