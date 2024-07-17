import { likedColorCode } from "@/constants";
import { HeartIcon } from "@public/heartIcon";
import type React from "react";
import { type CSSProperties, useCallback, useState } from "react";

interface Props {
  count: number;
  liked: boolean;
  style?: CSSProperties;
}

export const LikeIconButton = ({ count, liked, style }: Props) => {
  const [like, setLike] = useState(liked);
  const [likeCount, setLikeCount] = useState(count);

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (like) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      setLike(!like);
    },
    [like, likeCount],
  );

  return (
    <button onClick={onClick} type="button" style={{ ...baseStyle, ...style }}>
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
  borderColor: likedColorCode,
  filter: "drop-shadow(0 0 2px #000000)",
  fill: likedColorCode,
  height: "1.2rem",
  width: "1.2rem",
};

const iconStyle: CSSProperties = {
  fill: "#FFFFFF",
  filter: "drop-shadow(0 0 2px #000000)",
  height: "1.2rem",
  width: "1.2rem",
};

const labelStyle: CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: "500",
};
