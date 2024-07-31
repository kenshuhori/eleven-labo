import type { User } from "@prisma/client";

export const authorAvatar = (author: User): { name: string; image: string } => {
  const authorName = author.firstName ?? author.username ?? "Unknown";
  const authorImage = author.imageUrl;

  return {
    name: authorName,
    image: authorImage,
  };
};
