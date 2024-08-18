import React from "react";
import { EducationData } from "../../../../server/data";

const Education: React.FC = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="module">
      {EducationData.map((val, i) => (
        <li key={i} onClick={() => handleClick(val.url)}>
          <div className="year">
            <p>{val.year}</p>
          </div>
          <div className="heading">
            <div className="title">
              <div className="icon">
                <img src={val.img} alt="icon" />
              </div>{" "}
              <div className="education">
                <h5 className="institute">{val.institute} </h5>
                <h5 className="degree">{val.degree}</h5>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Education;
