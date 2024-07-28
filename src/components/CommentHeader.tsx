import { transformAgo } from "@/utils/ago";
import { Avatar, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import type React from "react";

interface CommentHeaderProps {
  author: string;
  authorImage: string;
  createdAt: Date;
}

export const CommentHeader = ({ author, authorImage, createdAt }: CommentHeaderProps) => {
  const createdAgo = transformAgo(createdAt);

  return (
    <div style={baseStyle}>
      <Avatar name={author} src={authorImage} />
      <div>
        <div>{author}</div>
        <div>{createdAgo}</div>
      </div>
    </div>
  );
};

export const SkeletonCommentHeader = () => {
  return (
    <div style={baseStyle}>
      <SkeletonCircle size="3rem" />
      <SkeletonText alignContent={"center"} skeletonHeight="4" noOfLines={2} width={"8rem"} />
    </div>
  );
};

const baseStyle: React.CSSProperties = {
  display: "flex",
  gap: "8px",
  width: "100%",
};
