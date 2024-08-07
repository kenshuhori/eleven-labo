interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const PostIcon = ({ className, style }: Props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 18 18"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M16.5 11.5C16.5 11.942 16.3244 12.366 16.0118 12.6785C15.6993 12.9911 15.2754 13.1667 14.8333 13.1667H4.83333L1.5 16.5V3.16667C1.5 2.72464 1.67559 2.30072 1.98816 1.98816C2.30072 1.67559 2.72464 1.5 3.16667 1.5H14.8333C15.2754 1.5 15.6993 1.67559 16.0118 1.98816C16.3244 2.30072 16.5 2.72464 16.5 3.16667V11.5Z"
        stroke={style?.borderColor || "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
