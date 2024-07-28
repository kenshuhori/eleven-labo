import { CommentFooter, SkeletonCommentFooter } from "@/components/CommentFooter";
import { CommentHeader, SkeletonCommentHeader } from "@/components/CommentHeader";
import { Skeleton, SkeletonText } from "@chakra-ui/react";
import type React from "react";

interface CommentProps {
  createdAt: Date;
  comment: string;
  id: number;
  likeCount: number;
}

export const Comment = ({ createdAt, comment, id, likeCount }: CommentProps) => {
  return (
    <div style={baseStyle}>
      <CommentHeader
        author={"John Doe"}
        authorImage={"https://example.com/john-doe.png"}
        createdAt={createdAt}
      />
      <div style={indentStyle}>{comment}</div>
      <div style={indentStyle}>
        <CommentFooter count={likeCount} />
      </div>
    </div>
  );
};

export const SkeletonComment = () => (
  <div style={baseStyle}>
    <SkeletonCommentHeader />
    <div style={indentStyle}>
      <SkeletonText skeletonHeight="4" noOfLines={2} flex={1} />
    </div>
    <div style={indentStyle}>
      <SkeletonCommentFooter />
    </div>
  </div>
);

const baseStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const indentStyle: React.CSSProperties = {
  marginLeft: "2rem",
};
