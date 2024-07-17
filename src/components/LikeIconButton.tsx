import { likedColorCode } from "@/constants";
import { HeartIcon } from "@public/heartIcon";
import React, { useCallback, useState, type CSSProperties } from "react";

interface Props {
  count: number;
  liked: boolean;
  style?: CSSProperties;
}

export const LikeIconButton = ({ count, liked, style }: Props) => {
  const [like, setLike] = useState(liked);
  const [likeCount, setLikeCount] = useState(count);

  const onClick = useCallback(() => {
    if (like) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLike(!like);
  }, [like, likeCount]);

  return (
    <div style={{ ...baseStyle, ...style }}>
      <button onClick={onClick} type="button">
        <HeartIcon style={like ? likedIconStyle : iconStyle} />
      </button>
      <div>{likeCount} likes</div>
    </div>
  );
};

const baseStyle: CSSProperties = {
  display: "flex",
  gap: "8px",
  lineHeight: "20px",
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
