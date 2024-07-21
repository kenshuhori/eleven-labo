import { colorCode } from "@/constants";
import { serviceTitleShort } from "@/constants";
import { Flex } from "@chakra-ui/react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import type { CSSProperties } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Flex style={headerStyle}>
        <Link href="/admin" passHref>
          <h1 style={headerH1Style}>{serviceTitleShort}</h1>
        </Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Flex>
      <Flex style={bodyStyle}>
        <nav style={{ minWidth: "200px", width: "200px" }}>
          <Flex align="center" bg={colorCode.creme} direction="column" w="100%" h="100%">
            <Link href={"/admin"} style={{ borderBottom: "1px solid", padding: "20px 10px" }}>
              メニュー1
            </Link>
            <Link href={"/admin"} style={{ borderBottom: "1px solid", padding: "20px 10px" }}>
              メニュー2
            </Link>
          </Flex>
        </nav>
        <main style={mainStyle}>{children}</main>
      </Flex>
    </div>
  );
}

const headerStyle: CSSProperties = {
  alignItems: "center",
  borderBottom: "1px",
  borderColor: colorCode.gray,
  borderStyle: "solid",
  display: "flex",
  height: "70px",
  justifyContent: "space-between",
  padding: "10px 20px",
};

const headerH1Style: CSSProperties = {
  fontWeight: 700,
  fontSize: "1.7rem",
  lineHeight: 1,
  margin: "6px 0 6px 6px",
};

const bodyStyle: CSSProperties = {
  backgroundColor: colorCode.lightGray,
  height: "calc(100vh - 70px)",
  minWidth: "960px",
  width: "100%",
};

const mainStyle: CSSProperties = {
  overflow: "auto",
  overscrollBehavior: "contain",
  paddingBlock: "16px",
  paddingInline: "24px",
  width: "100%",
};
