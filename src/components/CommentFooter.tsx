import { HeartIcon } from "@public/heartIcon";
import React, { type CSSProperties } from "react";

interface CommentFooterProps {
  likeCount: number;
}

export const CommentFooter = ({ likeCount }: CommentFooterProps) => {
  return (
    <div style={baseStyle}>
      <div style={{ display: "flex", gap: "8px", lineHeight: "normal" }}>
        <div style={{ display: "flex", gap: "4px" }}>
          <HeartIcon style={iconStyle} />
          <div className="likeCount">{likeCount} likes</div>
        </div>
      </div>
    </div>
  );
};

const baseStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  padding: "8px",
  width: "100%",
};

const iconStyle: CSSProperties = {
  fill: "#FFFFFF",
  height: "16px",
  width: "16px",
};
