import { colorCode } from "@/constants";
import { OrganizationList } from "@clerk/nextjs";
import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main style={baseStyle}>
      <OrganizationList afterSelectOrganizationUrl={"/admin"} afterSelectPersonalUrl={"/"} />
    </main>
  );
}

const baseStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "500px",
  backgroundColor: colorCode.lightGray,
};
