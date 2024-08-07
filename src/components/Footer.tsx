import { serviceTitle } from "@/constants";
import { colorCode } from "@/constants";
import Link from "next/link";
import React, { type CSSProperties } from "react";

export const Footer = () => (
  <footer style={baseStyle}>
    <div style={logoStyle}>{serviceTitle}</div>
    <div style={linksStyle}>
      {/* <Link href="/contact" style={navigateStyle}>
        お問い合わせ
      </Link> */}
      <Link href="/terms" style={navigateStyle}>
        利用規約
      </Link>
      <Link href="/privacy" style={navigateStyle}>
        プライバシーポリシー
      </Link>
      <Link href="/about" style={navigateStyle}>
        ベストイレブン研究所とは
      </Link>
    </div>
  </footer>
);

const baseStyle: CSSProperties = {
  backgroundColor: colorCode.darkGray,
  color: colorCode.white,
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  width: "auto",
};

const linksStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const logoStyle: CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: "bold",
};

const navigateStyle: CSSProperties = {
  borderBottom: "1px dotted",
  width: "fit-content",
};
