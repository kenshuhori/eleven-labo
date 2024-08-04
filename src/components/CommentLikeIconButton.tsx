import { createCommentLikeHistory, deleteCommentLikeHistory } from "@/app/actions";
import { LikeIconButton } from "@/components/LikeIconButton";
import { useAuth } from "@clerk/clerk-react";
import type { CommentLikeHistory } from "@prisma/client";
import type React from "react";
import { useCallback } from "react";

interface Props {
  likeHistories: CommentLikeHistory[];
  commentId: number;
}

export const CommentLikeIconButton = ({ likeHistories, commentId }: Props) => {
  const { isSignedIn, userId } = useAuth();
  const count = likeHistories.length;
  const liked = isSignedIn && likeHistories.some((likeHistory) => likeHistory.userId === userId);

  const onIncrement = useCallback(async () => {
    createCommentLikeHistory(commentId);
  }, [commentId]);
  const onDecrement = useCallback(async () => {
    deleteCommentLikeHistory(commentId);
  }, [commentId]);

  return (
    <LikeIconButton
      count={count}
      liked={liked ?? false}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};
