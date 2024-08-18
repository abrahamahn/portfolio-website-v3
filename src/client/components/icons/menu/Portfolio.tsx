import React from "react";

interface BlogIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const PortfolioIcon: React.FC<BlogIconProps> = ({
  width,
  height,
  color,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 64 56"
    xmlSpace="preserve"
    width={width}
    height={height}
    fill={color}
  >
    <g>
      <path
        d="M44.2,4H19.8C15.5,4,12,7.5,12,11.8v40.4c0,4.3,3.5,7.8,7.8,7.8h24.4c4.3,0,7.8-3.5,7.8-7.8V11.8C52,7.5,48.5,4,44.2,4z M48,52.2c0,2.1-1.7,3.8-3.8,3.8H19.8c-2.1,0-3.8-1.7-3.8-3.8V11.8C16,9.7,17.7,8,19.8,8h24.4c2.1,0,3.8,1.7,3.8,3.8V52.2z"
        fill={color}
      />
      <path
        d="M34,46h-4c-1.1,0-2,0.9-2,2s0.9,2,2,2h4c1.1,0,2-0.9,2-2S35.1,46,34,46z"
        fill={color}
      />
    </g>
  </svg>
);

export default PortfolioIcon;
