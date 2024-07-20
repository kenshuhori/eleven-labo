import { colorCode } from "@/constants";
import { color } from "framer-motion";
import Link from "next/link";
import React, { type CSSProperties } from "react";

interface BottomButtonProps {
  label: string;
  href: string;
  style?: CSSProperties;
}

export const BottomButton = ({ label, href, style }: BottomButtonProps) => {
  return (
    <div style={{ ...baseStyle, ...style }}>
      <Link href={href} style={buttonStyle}>
        {label}
      </Link>
    </div>
  );
};

const baseStyle: CSSProperties = {
  backgroundColor: colorCode.white,
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
  color: colorCode.white,
  fontSize: "1.2rem",
  fontWeight: "700",
  lineHeight: "38px",
  textAlign: "center",
  width: "100%",
};
