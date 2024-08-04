import { LikeIconButton } from "@/components/LikeIconButton";
import { ThemeLikeHistory } from "@/types/theme";
import { useAuth } from "@clerk/clerk-react";
import type React from "react";

interface Props {
  likeHistories: ThemeLikeHistory[];
}

export const ThemeLikeIconButton = ({ count, liked }: Props) => {
  const { isSignedIn } = useAuth();
  return <LikeIconButton count={count} liked={liked} />;
};
