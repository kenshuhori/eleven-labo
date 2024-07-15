import { transformAgo } from "@/utils/ago";
import { HeartIcon } from "@public/heartIcon";
import { PostIcon } from "@public/postIcon";
import Link from "next/link";
import React, { type CSSProperties } from "react";

interface PostFooterProps {
  commentCount: number;
  createdAt: string;
  description: string;
  postUrl: string;
  likeCount: number;
}

export const PostFooter = ({
  commentCount,
  createdAt,
  description,
  postUrl,
  likeCount,
}: PostFooterProps) => {
  const createdAgo = transformAgo(createdAt);

  return (
    <>
      <div style={baseStyle}>
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
        {description}
        <Link href={postUrl} />
      </div>
    </>
  );
};

const baseStyle: CSSProperties = {
  display: "flex",
  gap: "8px",
  width: "100%",
};

const iconStyle: CSSProperties = {
  fill: "#FFFFFF",
  height: "16px",
  width: "16px",
};
