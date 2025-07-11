import React from "react";

interface AboutIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const AboutIcon: React.FC<AboutIconProps> = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 64 58"
      style={{ width, height }}
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M32,14c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C44,19.4,38.6,14,32,14z M32,34c-4.4,0-8-3.6-8-8s3.6-8,8-8   s8,3.6,8,8S36.4,34,32,34z"
          fill={color}
        />
        <path
          d="M32,4C16.5,4,4,16.5,4,32c0,7.6,3.1,14.6,8,19.6c1.2,1.2,2.5,2.3,4,3.3c4.5,3.2,10,5,16,5s11.5-1.9,16-5   c1.4-1,2.7-2.1,4-3.3c5-5.1,8-12,8-19.6C60,16.5,47.5,4,32,4z M32,56c-6,0-11.4-2.2-15.6-5.8c1.1-3.6,4.4-6.2,8.3-6.2h14.7   c3.9,0,7.2,2.6,8.3,6.2C43.4,53.8,38,56,32,56z M50.7,47c-2.1-4.2-6.4-7-11.3-7H24.7c-5,0-9.3,2.9-11.3,7C10,42.9,8,37.7,8,32   C8,18.8,18.8,8,32,8s24,10.8,24,24C56,37.7,54,42.9,50.7,47z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default AboutIcon;
