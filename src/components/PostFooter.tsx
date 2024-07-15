import { omit } from "@/utils/omitText";
import { HeartIcon } from "@public/heartIcon";
import { PostIcon } from "@public/postIcon";
import Link from "next/link";
import React, { type CSSProperties } from "react";

interface PostFooterProps {
  commentCount: number;
  description: string;
  postUrl: string;
  likeCount: number;
}

export const PostFooter = ({ commentCount, description, postUrl, likeCount }: PostFooterProps) => {
  return (
    <div style={baseStyle}>
      <div style={{ display: "flex", gap: "8px" }}>
        <div style={{ display: "flex", gap: "4px" }}>
          <HeartIcon style={iconStyle} />
          <div className="likeCount">{likeCount} likes</div>
        </div>
        <div style={{ display: "flex", gap: "4px" }}>
          <PostIcon style={iconStyle} />
          <div className="postCount">{commentCount} comments</div>
        </div>
      </div>
      <div>
        <p>{omit(description, 50)}</p>
        <Link href={postUrl} style={navigateStyle}>
          {"続きを読む"}
        </Link>
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

const navigateStyle: CSSProperties = {
  borderBottom: "1px dotted",
  color: "#E06E05",
};
