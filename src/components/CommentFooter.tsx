import { HeartIcon } from "@public/heartIcon";
import React, { type CSSProperties } from "react";

interface CommentFooterProps {
  likeCount: number;
}

export const CommentFooter = ({ likeCount }: CommentFooterProps) => {
  return (
    <div>
      <div style={{ display: "flex", gap: "8px", lineHeight: "normal" }}>
        <div style={{ display: "flex", gap: "4px" }}>
          <HeartIcon style={iconStyle} />
          <div className="likeCount">{likeCount} likes</div>
        </div>
      </div>
    </div>
  );
};

const iconStyle: CSSProperties = {
  fill: "#FFFFFF",
  height: "16px",
  width: "16px",
};
