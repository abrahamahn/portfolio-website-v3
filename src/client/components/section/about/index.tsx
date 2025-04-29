import React from "react";
import { AboutData } from "../../../../server/data";
import Experience from "./Experience";
import Education from "./Education";
import useWindowWidth from "../../../hooks/useWindowWidth";

const About: React.FC = () => {
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
            <p
              dangerouslySetInnerHTML={{ __html: AboutData.paragraph1 }}
              style={{
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                maxWidth: isMobile ? "100%" : "90%",
                lineHeight: isMobile ? 1.4 : 1.3,
                color: "rgba(255, 255, 255, 0.511)",
                margin: "0px 20px",
                marginTop: isMobile ? "0px" : "auto",
              }}
            ></p>
            <br />
            <p
              dangerouslySetInnerHTML={{ __html: AboutData.paragraph2 }}
              style={{
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                maxWidth: isMobile ? "100%" : "90%",
                lineHeight: isMobile ? 1.4 : 1.3,
                color: "rgba(255, 255, 255, 0.511)",
                margin: "0px 20px",
                marginTop: isMobile ? "0px" : "auto",
              }}
            ></p>
            <br />
            <p
              dangerouslySetInnerHTML={{ __html: AboutData.paragraph3 }}
              style={{
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                maxWidth: isMobile ? "100%" : "90%",
                lineHeight: isMobile ? 1.4 : 1.3,
                color: "rgba(255, 255, 255, 0.511)",
                margin: "0px 20px",
                marginTop: isMobile ? "0px" : "auto",
              }}
            ></p>
          </div>
          <div
            style={{
              marginTop: isMobile ? "40px" : "50px",
              overflowX: "hidden",
            }}
          >
            <h5
              style={{
                fontSize: "1.1rem",
                paddingLeft: isMobile ? "16px" : "36px",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              Education
            </h5>
            <Education />
            <h5
              style={{
                fontSize: "1.1rem",
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
