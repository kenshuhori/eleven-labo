import { serviceTitle } from "@/constants";
import React, { type CSSProperties } from "react";

export const Footer = () => (
  <footer style={baseStyle}>
    <div style={logoStyle}>{serviceTitle}</div>
    <div>
      <div>about us</div>
      <div>お問い合わせ</div>
    </div>
  </footer>
);

const baseStyle: CSSProperties = {
  backgroundColor: "#555555",
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  marginTop: "20px",
  width: "auto",
};

const logoStyle: CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: "bold",
};
