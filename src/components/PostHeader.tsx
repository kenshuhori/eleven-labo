import { transformAgo } from "@/utils/ago";
import { Avatar, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import type React from "react";

interface PostHeaderProps {
  author: string;
  authorImage: string;
  createdAt: Date;
}

export const PostHeader = ({ author, authorImage, createdAt }: PostHeaderProps) => {
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

export const SkeletonPostHeader = () => {
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
  marginBottom: "-10px",
  width: "100%",
};
