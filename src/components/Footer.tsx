import { serviceTitle } from "@/constants";
import Link from "next/link";
import React, { type CSSProperties } from "react";

export const Footer = () => (
  <footer style={baseStyle}>
    <div style={logoStyle}>{serviceTitle}</div>
    <div style={linksStyle}>
      <Link href="/aboutUs">about us</Link>
      <Link href="/contact">お問い合わせ</Link>
    </div>
  </footer>
);

const baseStyle: CSSProperties = {
  backgroundColor: "#555555",
  color: "#ffffff",
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
