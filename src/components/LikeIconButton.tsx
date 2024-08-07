import { colorCode } from "@/constants";
import { useAuth, useClerk } from "@clerk/nextjs";
import { HeartIcon } from "@public/heartIcon";
import type React from "react";
import { type CSSProperties, useCallback, useState } from "react";

interface Props {
  count: number;
  liked: boolean;
  onDecrement: () => void;
  onIncrement: () => void;
}

export const LikeIconButton = ({ count, liked, onDecrement, onIncrement }: Props) => {
  const { isSignedIn } = useAuth();
  const clerk = useClerk();

  const [like, setLike] = useState(liked);
  const [likeCount, setLikeCount] = useState(count);

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (isSignedIn) {
        if (like) {
          onDecrement();
          setLikeCount(likeCount - 1);
        } else {
          onIncrement();
          setLikeCount(likeCount + 1);
        }
        setLike(!like);
      } else {
        clerk.openSignIn();
      }
    },
    [clerk, like, likeCount, isSignedIn, onDecrement, onIncrement],
  );

  return (
    <button onClick={onClick} type="button" style={baseStyle}>
      <HeartIcon style={like ? likedIconStyle : iconStyle} />
      <div style={labelStyle}>{likeCount} likes</div>
    </button>
  );
};

const baseStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  gap: "8px",
};

const likedIconStyle: CSSProperties = {
  borderColor: colorCode.liked,
  filter: `drop-shadow(0 0 2px ${colorCode.black})`,
  fill: colorCode.liked,
  height: "1.2rem",
  width: "1.2rem",
};

const iconStyle: CSSProperties = {
  fill: colorCode.white,
  filter: `drop-shadow(0 0 2px ${colorCode.black})`,
  height: "1.2rem",
  width: "1.2rem",
};

const labelStyle: CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: "500",
};
