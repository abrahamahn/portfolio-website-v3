import React from "react";
import Resume from "../resume";
import { AboutData } from "../../data";

const About: React.FC = () => {
  return (
    <div className="about-container" id="about">
      <div className="about">
        <div className="info">
          <div className="info-text">
            <p dangerouslySetInnerHTML={{ __html: AboutData.paragraph1 }}></p>
            <br />
            <p dangerouslySetInnerHTML={{ __html: AboutData.paragraph2 }}></p>
            <br />
            <p dangerouslySetInnerHTML={{ __html: AboutData.paragraph3 }}></p>
          </div>
          <Resume />
        </div>
      </div>
    </div>
  );
};

export default About;
