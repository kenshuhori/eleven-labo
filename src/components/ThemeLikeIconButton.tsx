import { LikeIconButton } from "@/components/LikeIconButton";
import { useAuth } from "@clerk/clerk-react";
import type { ThemeLikeHistory } from "@prisma/client";
import type React from "react";

interface Props {
  likeHistories: ThemeLikeHistory[];
}

export const ThemeLikeIconButton = ({ likeHistories }: Props) => {
  const { isSignedIn, userId } = useAuth();
  const count = likeHistories.length;
  const liked = isSignedIn && likeHistories.some((likeHistory) => likeHistory.userId === userId);

  return <LikeIconButton count={count} liked={liked ?? false} />;
};
