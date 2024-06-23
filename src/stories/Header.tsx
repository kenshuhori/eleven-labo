import React, { type CSSProperties } from "react";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { MenuButton } from "./MenuButton";

interface HeaderProps {
  backUrl?: string;
}

export const Header = ({ backUrl }: HeaderProps) => (
  <header style={HeaderStyle}>
    {/* 中央のタイトルがズレるためあえて24pxをいれる */}
    <div style={{ width: "24px" }}>
      {backUrl && (
        <Link href={backUrl} passHref>
          <ChevronLeftIcon boxSize={8} />
        </Link>
      )}
    </div>
    <Link href="/" passHref>
      <h1 style={HeaderH1Style}>Eleven Labo</h1>
    </Link>
    <MenuButton />
  </header>
);

const HeaderStyle: CSSProperties = {
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const HeaderH1Style: CSSProperties = {
  fontWeight: 700,
  fontSize: "1.7rem",
  lineHeight: 1,
  margin: "6px 0 6px 6px",
};
