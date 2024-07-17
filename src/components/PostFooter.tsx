import { omit } from "@/utils/omitText";
import { HeartIcon } from "@public/heartIcon";
import { PostIcon } from "@public/postIcon";
import Link from "next/link";
import React, { type CSSProperties } from "react";
import { LikeIconButton } from "./LikeIconButton";

interface PostFooterProps {
  commentCount: number;
  description: string;
  fullSentence: boolean;
  postUrl: string;
  likeCount: number;
}

export const PostFooter = ({
  commentCount,
  description,
  fullSentence,
  postUrl,
  likeCount,
}: PostFooterProps) => {
  return (
    <div style={baseStyle}>
      <div style={{ display: "flex", gap: "8px", lineHeight: "normal" }}>
        <LikeIconButton count={likeCount} liked={false} />
        <div style={{ display: "flex", gap: "4px" }}>
          <PostIcon style={iconStyle} />
          <div>{commentCount} comments</div>
        </div>
      </div>
      <div>
        {/* 気持ち1スペース分空ける */}
        {fullSentence ? (
          <>
            <label style={{ marginRight: "4px" }}>{description}</label>
          </>
        ) : (
          <>
            <label style={{ marginRight: "4px" }}>{omit(description, 55)}</label>
            <Link href={postUrl} style={navigateStyle}>
              {"続きを読む"}
            </Link>
          </>
        )}
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
