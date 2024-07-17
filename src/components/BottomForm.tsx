import Link from "next/link";
import React, { type CSSProperties } from "react";

interface BottomFormProps {
  label: string;
  href: string;
  style?: CSSProperties;
}

export const BottomForm = ({ label, href, style }: BottomFormProps) => {
  return (
    <div style={{ ...baseStyle, ...style }}>
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
  backgroundColor: "#000000",
  color: "#FFFFFF",
  fontSize: "1.2rem",
  fontWeight: "700",
  lineHeight: "38px",
  textAlign: "center",
  width: "100%",
};
