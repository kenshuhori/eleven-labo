import { LikeIconButton } from "@/components/LikeIconButton";
import { PostIconBox } from "@/components/PostIconBox";
import { transformAgo } from "@/utils/ago";
import Link from "next/link";
import type React from "react";
import type { CSSProperties } from "react";

interface ThemeProps {
  createdAt: string;
  id: number;
  likeCount: number;
  postCount: number;
  title: string;
}

export const Theme = ({ createdAt, id, likeCount, postCount, title }: ThemeProps) => {
  const createdAgo = transformAgo(createdAt);
  const url = `/themes/${id}`;

  return (
    <Link href={url}>
      <div style={baseStyle}>
        <div style={titleStyle}>{title}</div>
        <div style={createdAtStyle}>{createdAgo}</div>
        <div style={navigateStyle}>{"続きを読む >"}</div>
        <div style={footerStyle}>
          <LikeIconButton count={likeCount} liked={false} />
          <PostIconBox count={postCount} />
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
  bottom: "0.6rem",
  display: "flex",
  fontSize: "1.1rem",
  gap: "16px",
  lineHeight: "1",
  position: "absolute",
};
