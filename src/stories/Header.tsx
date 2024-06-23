import React, { type CSSProperties } from "react";

import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { MenuButton } from "./MenuButton";

interface HeaderProps {
  backUrl?: string;
}

export const Header = ({ backUrl }: HeaderProps) => (
  <header style={HeaderStyle}>
    <div style={HeaderLeftItemStyle}>
      {backUrl && (
        <Link href={backUrl} passHref>
          <ChevronLeftIcon />
        </Link>
      )}
    </div>
    <h1 style={HeaderH1Style}>Eleven Labo</h1>
    <div style={HeaderRightItemStyle}>
      <MenuButton />
    </div>
  </header>
);

const HeaderStyle: CSSProperties = {
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  padding: "15px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const HeaderH1Style: CSSProperties = {
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: 1,
  margin: "6px 0 6px 10px",
};

const HeaderLeftItemStyle: CSSProperties = {
  position: "absolute",
  left: "10px",
};

const HeaderRightItemStyle: CSSProperties = {
  position: "absolute",
  right: "10px",
};
