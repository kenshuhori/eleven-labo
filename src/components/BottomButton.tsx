import Link from "next/link";
import React, { type CSSProperties } from "react";

interface BottomButtonProps {
  label: string;
  href: string;
}

export const BottomButton = ({ label, href }: BottomButtonProps) => {
  return (
    <div style={baseStyle}>
      <Link href={href} style={buttonStyle}>
        {label}
      </Link>
    </div>
  );
};

const baseStyle: CSSProperties = {
  backgroundColor: "#FFFFFF",
  position: "sticky",
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  padding: "12px",
  boxShadow: "0 -2px 4px 0 #DDDDDD",
  width: "100%",
  zIndex: 100,
};

const buttonStyle: CSSProperties = {
  backgroundColor: "#1a75ff",
  color: "#FFFFFF",
  fontSize: "1.2rem",
  fontWeight: "700",
  lineHeight: "38px",
  textAlign: "center",
  width: "100%",
};
