import { createComment } from "@/app/actions";
import { colorCode } from "@/constants";
import { Button, useToast } from "@chakra-ui/react";
import { type CSSProperties, useRef, useState } from "react";
import { useSWRConfig } from "swr";

interface Props {
  postId: number;
  style?: CSSProperties;
}

export const CommentForm = ({ postId, style }: Props) => {
  const ref = useRef<HTMLFormElement>(null);
  const toast = useToast();
  const { mutate } = useSWRConfig();

  const [canSubmit, setCanSubmit] = useState(false);
  const onChangeComment = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    const comment = event.target.value;
    if (!comment) {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
  };

  const onSubmit = async (formData: FormData) => {
    try {
      await mutate(`/posts/${postId}/comments`, createComment(formData));
      ref.current?.reset();
      setCanSubmit(false);
      toast({
        title: "コメントしました",
        position: "top",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "コメントに失敗しました",
        position: "top",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <form action={onSubmit} ref={ref} style={{ ...baseStyle, ...style }}>
      <input name="postId" style={{ display: "none" }} value={postId} readOnly />
      <textarea
        name={"comment"}
        onChange={onChangeComment}
        placeholder={"コメントを追加..."}
        style={textareaStyle}
      />
      <Button isDisabled={!canSubmit} style={buttonStyle} type="submit">
        {"投稿"}
      </Button>
    </form>
  );
};

const baseStyle: CSSProperties = {
  alignItems: "center",
  backgroundColor: colorCode.white,
  position: "sticky",
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  padding: "1rem",
  boxShadow: `0 -2px 4px 0 ${colorCode.gray}`,
  width: "100%",
  zIndex: 100,
};

const buttonStyle: CSSProperties = {
  backgroundColor: colorCode.black,
  color: colorCode.white,
  fontSize: "1.2rem",
  fontWeight: "700",
  lineHeight: "38px",
  textAlign: "center",
  width: "5rem",
};

const textareaStyle: React.CSSProperties = {
  fontSize: "1.1rem",
  height: "4rem",
  outline: "none",
  resize: "none",
  width: "100%",
};
