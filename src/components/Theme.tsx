import { Flex } from "@chakra-ui/react";
import { HeartIcon } from "@public/heartIcon";
import { PostIcon } from "@public/postIcon";
import Link from "next/link";
import type React from "react";

interface ThemeProps {
  createdAt: string;
  likeCount: number;
  postCount: number;
  title: string;
  url: string;
}

export const Theme = ({ createdAt, likeCount, postCount, title, url }: ThemeProps) => (
  <div
    style={{
      alignItems: "center",
      border: "1px solid #DDDDDD",
      height: "6rem",
      justifyContent: "center",
      padding: "12px 18px",
      position: "relative",
      width: "100%",
    }}
  >
    <div className="title">{title}</div>
    <div className="createdAt">{createdAt}</div>
    <div className="navigate">
      <Link href={url}>続きを読む</Link>
    </div>
    <Flex>
      <Flex>
        <HeartIcon />
        <div className="likeCount">{likeCount} likes</div>
      </Flex>
      <Flex>
        <PostIcon />
        <div className="postCount">{postCount} posts</div>
      </Flex>
    </Flex>
  </div>
);
