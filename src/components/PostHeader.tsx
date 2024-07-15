import { transformAgo } from "@/utils/ago";
import { Avatar } from "@chakra-ui/react";
import type React from "react";

interface PostHeaderProps {
  author: string;
  authorImage: string;
  createdAt: string;
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

const baseStyle: React.CSSProperties = {
  display: "flex",
  gap: "8px",
  width: "100%",
};
