import React from "react";

interface ContactIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const ContactIcon: React.FC<ContactIconProps> = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox={`0 0 24 22`}
      xmlSpace="preserve"
      width={width}
      height={height}
      fill={color}
    >
      <path d="M21.5,2.5c-0.2-0.2-0.5-0.3-0.8-0.2l-18,5.8C2.5,8.2,2.3,8.5,2.3,8.8c0,0.3,0.2,0.6,0.4,0.7l8.2,3.6l3.6,8.2  c0.1,0.3,0.4,0.4,0.7,0.4c0,0,0,0,0,0c0.3,0,0.6-0.2,0.7-0.5l5.8-18C21.8,3,21.7,2.7,21.5,2.5z M5.1,8.9l13.2-4.3l-6.8,6.8  c-0.1,0.1-0.1,0.1-0.1,0.2L5.1,8.9z M15.1,18.9l-2.7-6.2c0.1,0,0.1-0.1,0.2-0.1l6.8-6.8L15.1,18.9z" />
    </svg>
  );
};

export default ContactIcon;
