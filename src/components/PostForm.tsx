"use client";

import { Formation } from "@/components/Formation";
import { ThemeHeader } from "@/components/ThemeHeader";
import { defaultFormation } from "@/fixtures/formations";
import { Button, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import type React from "react";

interface PostFormProps {
  theme: Theme;
}

export const PostForm = ({ theme }: PostFormProps) => {
  const router = useRouter();
  const toast = useToast();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/themes/${theme.id}`);
    toast({
      title: "投稿しました",
      position: "top",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const placeholder = "この11人を選んだ理由を伝えてみよう";

  return (
    <form onSubmit={onSubmit} style={baseStyle}>
      <ThemeHeader title={theme.title} />
      <Formation formation={defaultFormation} />
      <textarea placeholder={placeholder} style={textareaStyle} />
      <Button style={submitType} type={"submit"}>
        投稿
      </Button>
    </form>
  );
};

const baseStyle: React.CSSProperties = {
  width: "34rem",
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
