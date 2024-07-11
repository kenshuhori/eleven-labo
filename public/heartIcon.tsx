interface HeartIconProps {
  style?: React.CSSProperties;
}

export const HeartIcon = ({ style }: HeartIconProps) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 20 18"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M17.3666 2.84172C16.941 2.41589 16.4356 2.0781 15.8794 1.84763C15.3232 1.61716 14.727 1.49854 14.1249 1.49854C13.5229 1.49854 12.9267 1.61716 12.3705 1.84763C11.8143 2.0781 11.3089 2.41589 10.8833 2.84172L9.99994 3.72506L9.1166 2.84172C8.25686 1.98198 7.0908 1.49898 5.87494 1.49898C4.65908 1.49898 3.49301 1.98198 2.63327 2.84172C1.77353 3.70147 1.29053 4.86753 1.29053 6.08339C1.29053 7.29925 1.77353 8.46531 2.63327 9.32506L3.5166 10.2084L9.99994 16.6917L16.4833 10.2084L17.3666 9.32506C17.7924 8.89943 18.1302 8.39407 18.3607 7.83785C18.5912 7.28164 18.7098 6.68546 18.7098 6.08339C18.7098 5.48132 18.5912 4.88514 18.3607 4.32893C18.1302 3.77271 17.7924 3.26735 17.3666 2.84172Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};