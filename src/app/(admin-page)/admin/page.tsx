import { colorCode } from "@/constants";
import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main style={baseStyle}>
      <h1>Admin | Eleven Labo</h1>
    </main>
  );
}

Page.getLayout = (page: React.ReactElement) => {
  return (
    <div>
      {"あいうえお"}
      {page}
    </div>
  );
};

const baseStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "500px",
  backgroundColor: colorCode.lightGray,
};
