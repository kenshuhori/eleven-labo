import { CommentFooter, SkeletonCommentFooter } from "@/components/CommentFooter";
import { CommentHeader, SkeletonCommentHeader } from "@/components/CommentHeader";
import { SkeletonText } from "@chakra-ui/react";
import type { User } from "@prisma/client";
import type React from "react";

interface CommentProps {
  author: User;
  comment: string;
  createdAt: Date;
  likeCount: number;
}

export const Comment = ({ author, comment, createdAt, likeCount }: CommentProps) => {
  return (
    <div style={baseStyle}>
      <CommentHeader author={author} createdAt={createdAt} />
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
