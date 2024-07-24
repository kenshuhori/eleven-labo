import { CommentFooter } from "@/components/CommentFooter";
import { CommentHeader } from "@/components/CommentHeader";
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

const baseStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const indentStyle: React.CSSProperties = {
  marginLeft: "2rem",
};
