import type { CSSProperties } from "react";

interface PlayerIconProps {
    backgroundColor?: string;
    borderColor?: string;
    label: string;
    onClick?: () => void;
}

export const PlayerIcon = ({
    backgroundColor,
    borderColor,
    label,
    ...props
}: PlayerIconProps) => {
    const style: CSSProperties = {
        backgroundColor: backgroundColor ?? "red",
        borderColor: borderColor ?? "yellow",
        color: "white",
    }

    return (
        <button
            style={style}
            type="button"
            {...props}
        >
            {label}
        </button>
    );
};
