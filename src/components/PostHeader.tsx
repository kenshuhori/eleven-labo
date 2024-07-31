import { transformAgo } from "@/utils/ago";
import { authorAvatar } from "@/utils/authorAvatar";
import { Avatar, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import type { User } from "@prisma/client";
import type React from "react";

interface PostHeaderProps {
  author: User;
  createdAt: Date;
}

export const PostHeader = ({ author, createdAt }: PostHeaderProps) => {
  const createdAgo = transformAgo(createdAt);

  const { name, image } = authorAvatar(author);

  return (
    <div style={baseStyle}>
      <Avatar name={name} src={image} />
      <div>
        <div>{name}</div>
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
