import { Button } from "@chakra-ui/react";
import type { CSSProperties } from "react";

interface BottomFormProps {
  label: string;
  style?: CSSProperties;
}

export const BottomForm = ({ label, style }: BottomFormProps) => {
  return (
    <form style={{ ...baseStyle, ...style }}>
      <textarea placeholder={"コメントを追加..."} style={textareaStyle} />
      <Button style={buttonStyle}>{label}</Button>
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
