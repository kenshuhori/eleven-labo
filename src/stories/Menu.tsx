import type { CSSProperties } from "react";

interface PlayerIconProps {
  backgroundColor?: string;
}

export const Menu = ({ backgroundColor, ...props }: PlayerIconProps) => {
  const style: CSSProperties = {
    backgroundColor: backgroundColor ?? "#FFFFFF",
  };

  return (
    <div style={style}>
      <p>メニュー</p>
    </div>
  );
};
