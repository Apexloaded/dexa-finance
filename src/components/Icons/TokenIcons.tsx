export interface TokenIconProps {
  width?: string;
  height?: string;
};

export function ETH({ width = "25", height = "25" }: TokenIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-80.5 0 417 417"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <polygon
            fill="#343434"
            points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
          ></polygon>
          <polygon
            fill="#8C8C8C"
            points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
          ></polygon>
          <polygon
            fill="#3C3C3B"
            points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
          ></polygon>
          <polygon
            fill="#8C8C8C"
            points="127.962 416.9052 127.962 312.1852 0 236.5852"
          ></polygon>
          <polygon
            fill="#141414"
            points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
          ></polygon>
          <polygon
            fill="#393939"
            points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
          ></polygon>
        </g>
      </g>
    </svg>
  );
}
export function BNB({ width = "25", height = "25" }: TokenIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <circle cx="16" cy="16" r="16" fill="#F3BA2F" />
        <path
          fill="#FFF"
          d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"
        />
      </g>
    </svg>
  );
}

export function USDT({ width = "25", height = "25" }: TokenIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g fill="none" fillRule="evenodd">
          <circle cx="16" cy="16" r="16" fill="#26A17B"></circle>
          <path
            fill="#FFF"
            d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export function LINK({ width = "25", height = "25" }: TokenIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 37.8 43.6"
    >
      <defs>
        <style>{`.cls-1{fill:#2a5ada;}`}</style>
      </defs>
      <title>Asset 1</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M18.9,0l-4,2.3L4,8.6,0,10.9V32.7L4,35l11,6.3,4,2.3,4-2.3L33.8,35l4-2.3V10.9l-4-2.3L22.9,2.3ZM8,28.1V15.5L18.9,9.2l10.9,6.3V28.1L18.9,34.4Z"
          />
        </g>
      </g>
    </svg>
  );
}
