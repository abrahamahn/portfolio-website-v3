import React from "react";

interface PortfolioIconProps {
  width: number;
  height: number;
  color: string;
}

const BlogIcon: React.FC<PortfolioIconProps> = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 26 21"
      xmlSpace="preserve"
      width={width}
      height={height}
      fill={color}
    >
      <g>
        <path d="M18,2H6C4.3,2,3,3.3,3,5v14c0,1.7,1.3,3,3,3h12c1.7,0,3-1.3,3-3V5C21,3.3,19.7,2,18,2z M19,19c0,0.6-0.4,1-1,1H6   c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1V19z" fill={color} />
        <path d="M8,9h3c0.6,0,1-0.4,1-1s-0.4-1-1-1H8C7.4,7,7,7.4,7,8S7.4,9,8,9z" fill={color} />
        <path d="M16,11H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S16.6,11,16,11z" fill={color} />
        <path d="M16,15H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S16.6,15,16,15z" fill={color} />
      </g>
    </svg>
  );
};

export default BlogIcon;
