import { transformAgo } from "@/utils/ago";
import { Avatar, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import type { User } from "@prisma/client";
import type React from "react";

interface CommentHeaderProps {
  author: User;
  createdAt: Date;
}

export const CommentHeader = ({ author, createdAt }: CommentHeaderProps) => {
  const createdAgo = transformAgo(createdAt);

  const authorName = author.firstName ?? "Unknown";
  const authorImage = author.imageUrl;

  return (
    <div style={baseStyle}>
      <Avatar name={authorName} src={authorImage} />
      <div>
        <div>{authorName}</div>
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
