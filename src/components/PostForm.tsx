"use client";

import { Formation } from "@/components/Formation";
import { defaultFormation } from "@/fixtures/formations";
import { Button } from "@chakra-ui/react";
import type React from "react";

interface PostFormProps {
  theme: string;
}

export const PostForm = ({ theme }: PostFormProps) => {
  const placeholder = "この11人を選んだ理由を伝えてみよう";
  return (
    <div style={baseStyle}>
      <div style={headerStyle}>{theme}</div>
      <Formation formation={defaultFormation} />
      <textarea placeholder={placeholder} style={textareaStyle} />
      <Button style={submitType}>投稿</Button>
    </div>
  );
};

const baseStyle: React.CSSProperties = {
  width: "34rem",
};

const headerStyle: React.CSSProperties = {
  fontSize: "1.6rem",
  fontWeight: "700",
  paddingBlock: "8px",
  paddingInline: "8px",
};

const submitType: React.CSSProperties = {
  backgroundColor: "#000000",
  color: "#FFFFFF",
  fontSize: "1.2rem",
  fontWeight: "700",
  padding: "1.8rem",
  width: "100%",
};

const textareaStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  height: "10rem",
  padding: "1rem",
  width: "100%",
};
