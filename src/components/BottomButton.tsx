import { colorCode } from "@/constants";
import Link from "next/link";
import React, { type CSSProperties } from "react";

interface Props {
  label: string;
  href: string;
  style?: CSSProperties;
}

export const BottomButton = ({ label, href, style }: Props) => {
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
  boxShadow: `0 -2px 4px 0 ${colorCode.gray}`,
  width: "100%",
  zIndex: 100,
};

const buttonStyle: CSSProperties = {
  backgroundColor: colorCode.blue,
  color: colorCode.white,
  fontSize: "1.2rem",
  fontWeight: "700",
  lineHeight: "38px",
  textAlign: "center",
  width: "100%",
};
