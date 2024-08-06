import { Switch } from "@chakra-ui/react";
import type { CSSProperties } from "react";

interface Props {
  onChange: () => void;
}

export const PlayerIconSwitcher = ({ onChange }: Props) => {
  return (
    <div style={switcherStyle}>
      <label style={switcherLabelStyle}>
        表示切替
        <Switch onChange={onChange} size="lg" />
      </label>
    </div>
  );
};

const switcherStyle: CSSProperties = {
  top: "-1.1rem",
  position: "absolute",
  right: "1.0rem",
};

const switcherLabelStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  fontSize: "0.9rem",
  gap: "0.4rem",
};
