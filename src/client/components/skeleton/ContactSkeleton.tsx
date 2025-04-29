import React from "react";
import Skeleton from "./Skeleton";
import useWindowWidth from "../../hooks/useWindowWidth";

const ContactSkeleton: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: isMobile ? "20px" : "40px",
      }}
    >
      <div style={{ width: isMobile ? "100%" : "60%", marginBottom: "30px", textAlign: "center" }}>
        <Skeleton height="32px" width="60%" style={{ margin: "0 auto 20px" }} borderRadius="4px" />
        <Skeleton height="16px" width="80%" style={{ margin: "0 auto" }} borderRadius="4px" />
      </div>

      <div style={{ width: isMobile ? "100%" : "50%", marginBottom: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Skeleton height="20px" width="30%" style={{ marginBottom: "8px" }} borderRadius="4px" />
          <Skeleton height="40px" width="100%" borderRadius="4px" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Skeleton height="20px" width="30%" style={{ marginBottom: "8px" }} borderRadius="4px" />
          <Skeleton height="40px" width="100%" borderRadius="4px" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Skeleton height="20px" width="30%" style={{ marginBottom: "8px" }} borderRadius="4px" />
          <Skeleton height="120px" width="100%" borderRadius="4px" />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
          <Skeleton height="40px" width="120px" borderRadius="20px" />
        </div>
      </div>

      <div style={{ width: isMobile ? "100%" : "40%", marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
        {Array(3).fill(0).map((_, index) => (
          <Skeleton key={index} height="40px" width="40px" borderRadius="50%" />
        ))}
      </div>
    </div>
  );
};

export default ContactSkeleton; 