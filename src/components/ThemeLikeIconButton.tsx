import { createThemeLikeHistory, deleteThemeLikeHistory } from "@/app/actions";
import { LikeIconButton } from "@/components/LikeIconButton";
import { useAuth } from "@clerk/clerk-react";
import type { ThemeLikeHistory } from "@prisma/client";
import type React from "react";
import { useCallback } from "react";

interface Props {
  likeHistories: ThemeLikeHistory[];
  themeId: number;
}

export const ThemeLikeIconButton = ({ likeHistories, themeId }: Props) => {
  const { isSignedIn, userId } = useAuth();
  const count = likeHistories.length;
  const liked = isSignedIn && likeHistories.some((likeHistory) => likeHistory.userId === userId);

  const onIncrement = useCallback(async () => {
    createThemeLikeHistory(themeId);
  }, [themeId]);
  const onDecrement = useCallback(async () => {
    deleteThemeLikeHistory(themeId);
  }, [themeId]);

  return (
    <LikeIconButton
      count={count}
      liked={liked ?? false}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};
