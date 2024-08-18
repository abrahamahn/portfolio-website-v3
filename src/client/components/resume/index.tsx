import React from "react";
import Experience from "./Experience";
import Education from "./Education";

const Resume: React.FC = () => {
  return (
    <>
      <div className="resume-box">
        <h5 className="category-title">Education</h5>
        <Education />
        <h5 className="category-title">Experience</h5>
        <Experience />
      </div>
    </>
  );
};

export default Resume;
