import { createPostLikeHistory, deletePostLikeHistory } from "@/app/actions";
import { LikeIconButton } from "@/components/LikeIconButton";
import { useAuth } from "@clerk/clerk-react";
import type { PostLikeHistory } from "@prisma/client";
import type React from "react";
import { useCallback } from "react";

interface Props {
  likeHistories: PostLikeHistory[];
  postId: number;
}

export const PostLikeIconButton = ({ likeHistories, postId }: Props) => {
  const { isSignedIn, userId } = useAuth();
  const count = likeHistories.length;
  const liked = isSignedIn && likeHistories.some((likeHistory) => likeHistory.userId === userId);

  const onIncrement = useCallback(async () => {
    createPostLikeHistory(postId);
  }, [postId]);
  const onDecrement = useCallback(async () => {
    deletePostLikeHistory(postId);
  }, [postId]);

  return (
    <LikeIconButton
      count={count}
      liked={liked ?? false}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};
