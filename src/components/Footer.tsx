import React, { type CSSProperties } from "react";

export const Footer = () => (
  <footer style={baseStyle}>
    <div>hoge</div>
  </footer>
);

const baseStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
};
