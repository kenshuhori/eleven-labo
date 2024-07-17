import { PostIcon } from "@public/postIcon";
import type React from "react";
import type { CSSProperties } from "react";

interface Props {
  count: number;
  style?: CSSProperties;
}

export const PostIconBox = ({ count, style }: Props) => {
  return (
    <div style={{ ...baseStyle, ...style }}>
      <PostIcon style={iconStyle} />
      <div style={labelStyle}>{count} posts</div>
    </div>
  );
};

const baseStyle: CSSProperties = {
  display: "flex",
  gap: "8px",
};

const iconStyle: CSSProperties = {
  fill: "#FFFFFF",
  filter: "drop-shadow(0 0 1px #000000)",
  height: "1.2rem",
  width: "1.2rem",
};

const labelStyle: CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: "500",
  lineHeight: "18px",
};
