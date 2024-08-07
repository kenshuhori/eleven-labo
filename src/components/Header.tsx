import { serviceTitleShort } from "@/constants";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { type CSSProperties } from "react";

export const Header = () => {
  return (
    <header style={HeaderStyle}>
      <Link href="/" passHref>
        <h1 style={HeaderH1Style}>{serviceTitleShort}</h1>
      </Link>
      <div style={HeaderRightStyle}>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* リリース時は利用しない */}
        {/* <MenuButton /> */}
      </div>
    </header>
  );
};

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

const HeaderRightStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};
