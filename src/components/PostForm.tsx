"use client";

import { createPost } from "@/app/actions";
import { Formation, SkeletonFormation } from "@/components/Formation";
import { SkeletonThemeHeader, ThemeHeader } from "@/components/ThemeHeader";
import { colorCode } from "@/constants";
import { defaultFormation } from "@/fixtures/formations";
import { Button, Skeleton, useToast } from "@chakra-ui/react";
import type { Theme } from "@prisma/client";
import { useRef } from "react";
import { useSWRConfig } from "swr";

interface PostFormProps {
  theme: Theme;
}

export const PostForm = ({ theme }: PostFormProps) => {
  const ref = useRef<HTMLFormElement>(null);
  const toast = useToast();
  const { mutate } = useSWRConfig();

  const onSubmit = async (formData: FormData) => {
    try {
      await mutate(`/themes/${theme.id}`, createPost(formData));
      ref.current?.reset();
      toast({
        title: "投稿しました",
        position: "top",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "投稿に失敗しました",
        position: "top",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const placeholder = "この11人を選んだ理由を伝えてみよう";

  return (
    <form action={onSubmit} ref={ref} style={baseStyle}>
      <ThemeHeader title={theme.title} />
      <input name="themeId" style={{ display: "none" }} value={theme.id} readOnly />
      <Formation formationCode={defaultFormation.code} />
      <textarea name="description" placeholder={placeholder} style={textareaStyle} />
      <Button style={submitType} type={"submit"}>
        投稿
      </Button>
    </form>
  );
};

export const SkeletonPostForm = () => {
  return (
    <div style={baseStyle}>
      <SkeletonThemeHeader />
      <SkeletonFormation />
      <Skeleton style={{ height: "9rem", marginTop: "1rem" }} />
      <Skeleton style={{ height: "3rem", marginTop: "1rem" }} />
    </div>
  );
};

const baseStyle: React.CSSProperties = {
  width: "34rem",
};

const submitType: React.CSSProperties = {
  backgroundColor: colorCode.black,
  color: colorCode.white,
  fontSize: "1.2rem",
  fontWeight: "700",
  padding: "1.8rem",
  width: "100%",
};

const textareaStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  height: "10rem",
  outline: "none",
  padding: "1rem",
  width: "100%",
};
