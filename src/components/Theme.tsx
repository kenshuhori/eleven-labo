import { transformAgo } from "@/utils/ago";
import { HeartIcon } from "@public/heartIcon";
import { PostIcon } from "@public/postIcon";
import Link from "next/link";
import type React from "react";
import type { CSSProperties } from "react";

interface ThemeProps {
  createdAt: string;
  likeCount: number;
  postCount: number;
  title: string;
  url: string;
}

export const Theme = ({ createdAt, likeCount, postCount, title, url }: ThemeProps) => {
  const createdAgo = transformAgo(createdAt);

  return (
    <Link href={url}>
      <div style={baseStyle}>
        <div style={titleStyle}>{title}</div>
        <div style={createdAtStyle}>{createdAgo}</div>
        <div style={navigateStyle}>{"続きを読む >"}</div>
        <div style={footerStyle}>
          <div style={{ display: "flex", gap: "4px" }}>
            <HeartIcon style={iconStyle} />
            <div>{likeCount} likes</div>
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <PostIcon style={iconStyle} />
            <div>{postCount} posts</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const baseStyle: CSSProperties = {
  borderBottom: "1px solid #DDDDDD",
  height: "10rem",
  padding: "12px 18px",
  position: "relative",
  width: "100%",
};

const titleStyle: CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: "bold",
};

const createdAtStyle: CSSProperties = {
  fontSize: "1rem",
};

const navigateStyle: CSSProperties = {
  color: "#E06E05",
  fontSize: "1rem",
  fontWeight: "bold",
};

const footerStyle: CSSProperties = {
  bottom: "8px",
  display: "flex",
  fontSize: "1.1rem",
  gap: "14px",
  lineHeight: "1",
  position: "absolute",
};

const iconStyle: CSSProperties = {
  fill: "#FFFFFF",
  height: "16px",
  width: "16px",
};
