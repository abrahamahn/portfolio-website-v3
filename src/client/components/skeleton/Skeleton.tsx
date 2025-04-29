import React from "react";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "100%",
  borderRadius = "0px",
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`skeleton-pulse ${className}`}
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        className="skeleton-wave"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          transform: "translateX(-100%)",
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)",
          animation: "skeleton-wave 1.5s infinite",
        }}
      />
    </div>
  );
};

export default Skeleton; 