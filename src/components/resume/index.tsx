import React from "react";
import Achievements from "./Achievements";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";

const ModalContent: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h3>Personal Info</h3>
          <PersonalInfo />
        </div>
        <div className="col-6 achievements-wrapper">
          <h3>Achievements</h3>
          <Achievements />
        </div>
      </div>
      <div className="row resume-box">
        <div className="col-6">
          <h3>Experience</h3>
          <Experience />
        </div>
        <div className="col-6">
          <h3>Education</h3>
          <Education />
        </div>
      </div>
    </>
  );
};

export default ModalContent;
