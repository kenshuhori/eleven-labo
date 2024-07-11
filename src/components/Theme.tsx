import { transformAgo } from "@/utils/ago";
import { Flex } from "@chakra-ui/react";
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
        <Flex style={footerStyle}>
          <Flex style={{ gap: "4px" }}>
            <HeartIcon style={iconStyle} />
            <div className="likeCount">{likeCount} likes</div>
          </Flex>
          <Flex style={{ gap: "4px" }}>
            <PostIcon style={iconStyle} />
            <div className="postCount">{postCount} posts</div>
          </Flex>
        </Flex>
      </div>
    </Link>
  );
};

const baseStyle: CSSProperties = {
  borderBottom: "1px solid #DDDDDD",
  height: "7rem",
  padding: "12px 18px",
  position: "relative",
  width: "100%",
};

const titleStyle: CSSProperties = {
  fontSize: "0.8rem",
  fontWeight: "bold",
};

const createdAtStyle: CSSProperties = {
  fontSize: "0.7rem",
};

const navigateStyle: CSSProperties = {
  color: "#E06E05",
  fontSize: "0.7rem",
  fontWeight: "bold",
};

const footerStyle: CSSProperties = {
  alignItems: "flex-end",
  bottom: "8px",
  fontSize: "0.8rem",
  gap: "14px",
  lineHeight: "normal",
  position: "absolute",
};

const iconStyle: CSSProperties = {
  fill: "#FFFFFF",
  height: "16px",
  width: "16px",
};
