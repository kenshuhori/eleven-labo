"use client";

import { colorCode } from "@/constants";
import type { CSSProperties } from "react";

export default function Page() {
  const placeholder = "...";
  return (
    <main style={baseStyle}>
      <h1 style={titleStyle}>ご意見・お問い合わせ</h1>
      <form>
        <textarea
          name="description"
          onChange={() => {}}
          placeholder={placeholder}
          style={textareaStyle}
        />
        <button style={submitStyle} type={"submit"}>
          投稿
        </button>
      </form>
    </main>
  );
}

const baseStyle: CSSProperties = {
  padding: "2rem",
  background: "#f8f8f0",
  lineHeight: 1.8,
};
const submitStyle: React.CSSProperties = {
  backgroundColor: colorCode.black,
  color: colorCode.white,
  fontSize: "1.2rem",
  fontWeight: "700",
  padding: "0.5rem",
  width: "100%",
};

const textareaStyle: React.CSSProperties = {
  borderRadius: "0.5rem",
  height: "20rem",
  padding: "1rem",
  resize: "none",
  width: "100%",
};

const titleStyle: React.CSSProperties = {
  fontSize: "1.4em",
  fontWeight: "700",
  marginBottom: "1.0rem",
};
