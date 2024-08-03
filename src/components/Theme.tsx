import { LikeIconButton } from "@/components/LikeIconButton";
import { PostIconBox } from "@/components/PostIconBox";
import { colorCode } from "@/constants";
import { transformAgo } from "@/utils/ago";
import { Skeleton } from "@chakra-ui/react";
import defaultThumbnailImage from "@public/theme-thumbnail.jpg";
import Link from "next/link";
import type React from "react";
import type { CSSProperties } from "react";

interface ThemeProps {
  createdAt: string;
  id: number;
  likeCount: number;
  postCount: number;
  thumbnail: string;
  title: string;
}

export const Theme = ({ createdAt, id, likeCount, postCount, thumbnail, title }: ThemeProps) => {
  const createdAgo = transformAgo(createdAt);
  const url = `/themes/${id}`;

  return (
    <Link href={url}>
      <div style={baseStyle}>
        <div style={{ width: "80%" }}>
          <div style={titleStyle}>{title}</div>
          <div style={createdAtStyle}>{createdAgo}</div>
          <div style={navigateStyle}>{"続きを読む >"}</div>
          <div style={footerStyle}>
            <LikeIconButton count={likeCount} liked={false} />
            <PostIconBox count={postCount} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {thumbnail ? (
            <img alt="theme" src={thumbnail} style={thumbnailStyle} />
          ) : (
            <img alt="theme" src={defaultThumbnailImage.src} style={thumbnailStyle} />
          )}
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTheme = () => {
  return (
    <>
      <div style={baseStyle}>
        <Skeleton style={{ height: "3rem", width: "100%" }} />
        <Skeleton style={{ height: "1.2rem", width: "6rem" }} />
        <Skeleton style={{ height: "1.2rem", width: "6rem" }} />
        <div style={footerStyle}>
          <Skeleton style={{ height: "1.2rem", width: "6rem" }} />
          <Skeleton style={{ height: "1.2rem", width: "6rem" }} />
        </div>
      </div>
    </>
  );
};

const baseStyle: CSSProperties = {
  borderBottom: `1px solid ${colorCode.gray}`,
  display: "flex",
  gap: "1rem",
  height: "10rem",
  justifyContent: "space-between",
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
  color: colorCode.orange,
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

const thumbnailStyle: CSSProperties = {
  borderRadius: "1.0rem",
  height: "6rem",
  objectFit: "cover",
  width: "6rem",
};
