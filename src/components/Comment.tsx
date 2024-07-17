import { CommentFooter } from "@/components/CommentFooter";
import { CommentHeader } from "@/components/CommentHeader";
import type React from "react";

interface CommentProps {
  author: string;
  authorImage: string;
  createdAt: string;
  comment: string;
  id: number;
  likeCount: number;
}

export const Comment = ({
  author,
  authorImage,
  createdAt,
  comment,
  id,
  likeCount,
}: CommentProps) => {
  return (
    <div style={baseStyle}>
      <CommentHeader author={author} authorImage={authorImage} createdAt={createdAt} />
      <div style={indentStyle}>{comment}</div>
      <div style={indentStyle}>
        <CommentFooter likeCount={likeCount} />
      </div>
    </div>
  );
};

const baseStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const indentStyle: React.CSSProperties = {
  marginLeft: "2rem",
};
