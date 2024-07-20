import { colorCode } from "@/constants";
import { Skeleton } from "@chakra-ui/react";
import type { CSSProperties } from "react";

const Loading = () => {
  return <Skeleton style={baseStyle} />;
};

const baseStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "500px",
  backgroundColor: colorCode.lightGray,
};

export default Loading;
