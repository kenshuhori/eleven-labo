import { CommentIconBox } from "@/components/CommentIconBox";
import { LikeIconButton } from "@/components/LikeIconButton";
import { colorCode } from "@/constants";
import { omit } from "@/utils/omitText";
import { Skeleton, SkeletonText } from "@chakra-ui/react";
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
        <LikeIconButton
          count={likeCount}
          liked={false}
          onDecrement={() => {}}
          onIncrement={() => {}}
        />
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

export const SkeletonPostFooter = () => {
  return (
    <div style={baseStyle}>
      <div style={iconsStyle}>
        <Skeleton style={{ height: "1rem", width: "6rem" }} />
        <Skeleton style={{ height: "1rem", width: "8rem" }} />
      </div>
      <div>
        <SkeletonText skeletonHeight="4" noOfLines={2} flex={1} />
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
  color: colorCode.orange,
};
