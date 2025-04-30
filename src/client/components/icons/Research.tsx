import React from "react";

interface ResearchIconProps {
  width: number;
  height: number;
  color: string;
}

const ResearchIcon: React.FC<ResearchIconProps> = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Data visualization bars */}
      <rect x="3" y="7" width="4" height="15" rx="25" />
      <rect x="9" y="5" width="4" height="17" rx="25" />
      <rect x="15" y="3" width="4" height="19" rx="25" />
    </svg>
  );
};

export default ResearchIcon;
