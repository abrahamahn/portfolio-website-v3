import React from "react";
import Skeleton from "./Skeleton";
import useWindowWidth from "../../hooks/useWindowWidth";

const AboutSkeleton: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  return (
    <div
      id="about"
      style={{
        width: "100%",
        height: "calc(var(--vh, 1vh) * 100)",
        display: "flex",
        overflow: "auto",
        padding: 0,
        maxWidth: "1400px",
        position: isMobile ? "absolute" : "static",
        top: isMobile ? 0 : "auto",
        marginLeft: isMobile ? 0 : "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "auto",
          clear: "both",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "auto",
          padding: isMobile
            ? "15px"
            : window.innerWidth <= 1080
            ? "100px 20px"
            : window.innerWidth <= 1200
            ? "100px 40px"
            : "100px 150px",
          marginTop: isMobile ? "80px" : "auto",
          border: isMobile ? "transparent" : "none",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
          }}
        >
          <div
            style={{
              width: isMobile ? "auto" : "100%",
              padding: isMobile ? "0px" : "0px 15px 0px 15px",
              marginTop: isMobile ? "10px" : "0px",
            }}
          >
            {Array(3).fill(0).map((_, index) => (
              <div key={index} style={{ margin: "0px 20px", marginTop: isMobile ? "0px" : "auto" }}>
                <Skeleton height="16px" width="100%" borderRadius="4px" style={{ marginBottom: "8px" }} />
                <Skeleton height="16px" width="90%" borderRadius="4px" style={{ marginBottom: "8px" }} />
                <Skeleton height="16px" width="80%" borderRadius="4px" style={{ marginBottom: "16px" }} />
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: isMobile ? "40px" : "50px",
              overflowX: "hidden",
            }}
          >
            <Skeleton height="24px" width="120px" borderRadius="4px" style={{ marginLeft: isMobile ? "16px" : "36px", marginBottom: "20px" }} />
            {Array(2).fill(0).map((_, index) => (
              <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "15px", marginLeft: isMobile ? "16px" : "36px" }}>
                <Skeleton height="20px" width="20px" borderRadius="4px" />
                <Skeleton height="16px" width="200px" borderRadius="4px" />
              </div>
            ))}
            <Skeleton height="24px" width="120px" borderRadius="4px" style={{ marginLeft: isMobile ? "16px" : "36px", marginTop: "30px", marginBottom: "20px" }} />
            {Array(2).fill(0).map((_, index) => (
              <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "15px", marginLeft: isMobile ? "16px" : "36px" }}>
                <Skeleton height="20px" width="20px" borderRadius="4px" />
                <Skeleton height="16px" width="200px" borderRadius="4px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkeleton; 