import { Button } from "@chakra-ui/react";
import { type CSSProperties, useRef } from "react";

interface BottomFormProps {
  label: string;
  onSubmit: (formData: FormData) => void;
  style?: CSSProperties;
}

export const BottomForm = ({ label, onSubmit, style }: BottomFormProps) => {
  const ref = useRef<HTMLFormElement>(null);
  const onClick = (formData: FormData) => {
    onSubmit(formData);
    ref.current?.reset();
  };

  return (
    <form action={onClick} ref={ref} style={{ ...baseStyle, ...style }}>
      <textarea name={"comment"} placeholder={"コメントを追加..."} style={textareaStyle} />
      <Button style={buttonStyle} type="submit">
        {label}
      </Button>
    </form>
  );
};

const baseStyle: CSSProperties = {
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  position: "sticky",
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  padding: "1rem",
  boxShadow: "0 -2px 4px 0 #DDDDDD",
  width: "100%",
  zIndex: 100,
};

const buttonStyle: CSSProperties = {
  backgroundColor: "#000000",
  color: "#FFFFFF",
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
