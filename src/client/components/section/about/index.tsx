import React from "react";
import { AboutData } from "../../../../server/data";
import Experience from "./Experience";
import Education from "./Education";
import useWindowWidth from "../../../hooks/useWindowWidth";

const About: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;
  const isVeryWide = windowWidth > 1600;

  return (
    <div
      id="about"
      style={{
        width: "100%",
        height: "calc(var(--vh, 1vh) * 100)",
        display: "flex",
        overflow: "auto",
        padding: 0,
        position: isMobile ? "absolute" : "static",
        top: isMobile ? 0 : "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: isMobile
            ? "15px"
            : window.innerWidth <= 1080
            ? "100px 20px"
            : window.innerWidth <= 1200
            ? "100px 40px"
            : "100px 150px",
          marginTop: isMobile ? "80px" : "auto",
          border: isMobile ? "transparent" : "none",
          paddingBottom: isMobile ? "90px" : undefined,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: isVeryWide ? "1200px" : "800px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              width: "100%",
              padding: isMobile ? "0px 16px 0px 16px" : "0px 36px 0px 36px",
              marginTop: isMobile ? "10px" : "0px",
            }}
          >
            <p
              dangerouslySetInnerHTML={{ __html: AboutData.paragraph1 }}
              style={{
                fontSize: "0.95rem",
                maxWidth: "100%",
                lineHeight: 1.3,
                color: "rgba(255, 255, 255, 0.511)",
                margin: "0 auto",
                padding: "10px 0",
              }}
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: AboutData.paragraph2 }}
              style={{
                fontSize: "0.95rem",
                maxWidth: "100%",
                lineHeight: 1.3,
                color: "rgba(255, 255, 255, 0.511)",
                margin: "0 auto",
                padding: "10px 0",
              }}
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: AboutData.paragraph3 }}
              style={{
                fontSize: "0.95rem",
                maxWidth: "100%",
                lineHeight: 1.3,
                color: "rgba(255, 255, 255, 0.511)",
                margin: "0 auto",
                padding: "10px 0",
              }}
            ></p>
          </div>
          <div
            style={{
              marginTop: isMobile ? "40px" : "50px",
              width: "100%",
            }}
          >
            <h5
              style={{
                fontSize: isVeryWide ? "1.3rem" : "1.1rem",
                paddingLeft: isMobile ? "16px" : "36px",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              Education
            </h5>
            <Education />
            <h5
              style={{
                fontSize: isVeryWide ? "1.3rem" : "1.1rem",
                paddingLeft: isMobile ? "16px" : "36px",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              Experience
            </h5>
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
