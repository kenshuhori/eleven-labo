import { CommentIconBox } from "@/components/CommentIconBox";
import { LikeIconButton } from "@/components/LikeIconButton";
import { omit } from "@/utils/omitText";
import Link from "next/link";
import React, { type CSSProperties } from "react";

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
      <div style={iconsStyle}>
        <LikeIconButton count={likeCount} liked={false} />
        <CommentIconBox count={commentCount} />
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

const iconsStyle: CSSProperties = {
  display: "flex",
  gap: "16px",
  lineHeight: "normal",
};

const navigateStyle: CSSProperties = {
  borderBottom: "1px dotted",
  color: "#E06E05",
};
