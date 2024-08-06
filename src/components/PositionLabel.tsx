import { colorCode } from "@/constants";

interface Props {
  position: string;
}

export const PositionLabel = ({ position }: Props) => {
  let label = "";
  let color = "#000000";
  switch (position) {
    case "Goalkeeper":
      label = "GK";
      color = "#000000";
      break;
    case "Defender":
      label = "DF";
      color = "royalblue";
      break;
    case "Midfielder":
      label = "MF";
      color = "orange";
      break;
    case "Attacker":
      label = "FW";
      color = "lightcoral";
      break;
    default:
      label = "??";
      color = "#000000";
      break;
  }

  return (
    <span
      style={{
        alignItems: "center",
        color: color,
        display: "flex",
        fontWeight: "600",
        textShadow: `1px 1px ${colorCode.black}`,
      }}
    >
      {label}
    </span>
  );
};

const baseStyle: React.CSSProperties = {
  alignItems: "center",
  color: "red",
  display: "flex",
  fontWeight: "600",
  textShadow: `1px 1px ${colorCode.black}`,
};
