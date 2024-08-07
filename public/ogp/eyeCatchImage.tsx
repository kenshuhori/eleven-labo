interface Props {
  style?: React.CSSProperties;
}

export const EyeCatchImage = ({ style }: Props) => {
  return (
    <svg
      width="390"
      height="390"
      viewBox="0 0 390 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g clip-path="url(#clip0_132_1422)">
        <rect x="0.00561523" y="19.5515" width="389.983" height="370.448" fill="#289A0B" />
        <rect
          x="95.5017"
          y="301.946"
          width="198.991"
          height="71.1478"
          fill="#289A0B"
          stroke="white"
          stroke-width="5"
        />
        <line x1="0.00561523" y1="373.094" x2="390" y2="373.094" stroke="white" stroke-width="5" />
        <line y1="49.4658" x2="389.994" y2="49.4658" stroke="white" stroke-width="5" />
        <path
          d="M242.495 51.4512C242.495 78.5542 221.163 100.402 194.997 100.402C168.832 100.402 147.5 78.5542 147.5 51.4512C147.5 24.3482 168.832 2.5 194.997 2.5C221.163 2.5 242.495 24.3482 242.495 51.4512Z"
          fill="#289A0B"
          stroke="white"
          stroke-width="5"
        />
      </g>
      <g filter="url(#filter0_d_132_1422)">
        <path
          d="M174.998 226.015V223.359C175.05 214.245 175.857 206.979 177.42 201.562C179.034 196.146 181.378 191.771 184.451 188.437C187.524 185.104 191.222 182.083 195.545 179.375C198.774 177.291 201.665 175.13 204.217 172.89C206.769 170.651 208.8 168.177 210.311 165.469C211.821 162.708 212.576 159.635 212.576 156.25C212.576 152.656 211.717 149.505 209.998 146.797C208.279 144.088 205.962 142.005 203.045 140.547C200.18 139.088 197.003 138.359 193.514 138.359C190.128 138.359 186.925 139.114 183.904 140.625C180.883 142.083 178.409 144.271 176.482 147.187C174.555 150.052 173.514 153.62 173.357 157.89H141.482C141.743 147.474 144.243 138.88 148.982 132.109C153.722 125.286 159.998 120.208 167.811 116.875C175.623 113.489 184.243 111.797 193.67 111.797C204.034 111.797 213.201 113.515 221.17 116.953C229.139 120.338 235.389 125.26 239.92 131.719C244.451 138.177 246.717 145.963 246.717 155.078C246.717 161.172 245.701 166.588 243.67 171.328C241.691 176.015 238.904 180.182 235.311 183.828C231.717 187.422 227.472 190.677 222.576 193.594C218.462 196.041 215.076 198.594 212.42 201.25C209.816 203.906 207.863 206.979 206.561 210.469C205.311 213.958 204.659 218.255 204.607 223.359V226.015H174.998ZM190.467 276.015C185.258 276.015 180.805 274.192 177.107 270.547C173.462 266.849 171.665 262.422 171.717 257.265C171.665 252.161 173.462 247.786 177.107 244.14C180.805 240.495 185.258 238.672 190.467 238.672C195.415 238.672 199.764 240.495 203.514 244.14C207.264 247.786 209.165 252.161 209.217 257.265C209.165 260.703 208.253 263.854 206.482 266.719C204.764 269.531 202.498 271.797 199.686 273.515C196.873 275.182 193.8 276.015 190.467 276.015Z"
          fill="#FFF200"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_132_1422"
          x="129.482"
          y="111.797"
          width="129.234"
          height="188.219"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_132_1422" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_132_1422"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_132_1422">
          <rect width="390" height="390" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
