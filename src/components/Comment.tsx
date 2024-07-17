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
      <div>
        <p>{comment}</p>
      </div>
      <CommentFooter likeCount={likeCount} />
    </div>
  );
};

const baseStyle: React.CSSProperties = {
  width: "34rem",
};

const formationStyle: React.CSSProperties = {
  position: "relative",
};
