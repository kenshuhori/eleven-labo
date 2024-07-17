import { likedColorCode } from "@/constants";
import { HeartIcon } from "@public/heartIcon";
import React, { type CSSProperties } from "react";

interface Props {
  count: number;
  liked: boolean;
  style?: CSSProperties;
}

export const LikeIconButton = ({ count, liked, style }: Props) => {
  return (
    <div style={{ ...baseStyle, ...style }}>
      <HeartIcon style={liked ? likedIconStyle : iconStyle} />
      <div>{count} likes</div>
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
  height: "1.2rem",
  width: "1.2rem",
};
