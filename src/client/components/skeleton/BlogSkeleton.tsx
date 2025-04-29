import React from "react";
import Skeleton from "./Skeleton";
import useWindowWidth from "../../hooks/useWindowWidth";

const BlogSkeleton: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  return (
    <div
      style={{
        display: "flex",
        margin: "0 auto",
        alignItems: "center",
        borderRadius: "20px",
        maxWidth: "320px",
        height: "220px",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        border: "1px solid rgba(255, 255, 255, 0.7)",
        width: isMobile ? "90%" : "100%",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          borderRight: "1px solid #d5d5d5",
        }}
      >
        <Skeleton borderRadius="20px 0px 0px 20px" />
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "10px",
          backgroundColor: "#00000007",
        }}
      >
        <div style={{ width: "90%", marginBottom: "8px" }}>
          <Skeleton height="24px" borderRadius="4px" />
        </div>
        <div style={{ width: "40%", marginBottom: "8px" }}>
          <Skeleton height="12px" borderRadius="4px" />
        </div>
        <div style={{ width: "60%", marginBottom: "12px" }}>
          <Skeleton height="12px" borderRadius="4px" />
        </div>
        <div style={{ width: "100%", marginBottom: "8px" }}>
          <Skeleton height="8px" borderRadius="4px" />
        </div>
        <div style={{ width: "95%", marginBottom: "6px" }}>
          <Skeleton height="8px" borderRadius="4px" />
        </div>
        <div style={{ width: "85%" }}>
          <Skeleton height="8px" borderRadius="4px" />
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton; 