import Link from "next/link";
import React, { type CSSProperties } from "react";

interface BottomButtonProps {
  label: string;
  onClick: () => void;
}

export const BottomButton = ({ label, onClick }: BottomButtonProps) => (
  <div style={baseStyle}>
    <Link href={"/posts/new"} style={buttonStyle}>
      {label}
    </Link>
  </div>
);

const baseStyle: CSSProperties = {
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  padding: "12px",
  boxShadow: "0 -2px 4px 0 rgba(0,0,0,0.08)",
  width: "10rem",
  zIndex: 100,
};

const buttonStyle: CSSProperties = {
  backgroundColor: "#1a75ff",
  color: "#FFFFFF",
  lineHeight: "38px",
  textAlign: "center",
  width: "100%",
};
