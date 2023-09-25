import React from "react";

interface EducationItem {
  degree: string;
  year: string;
  img: string;
  institute: string;
}

const educationContent: EducationItem[] = [
  {
    year: "2011 - 2015",
    img: "/assets/company/usc.jpg",
    institute: "UNIVERSITY OF SOUTHERN CALIFORNIA",
    degree: "B.S. Music Industry",
  },
  {
    year: "2007 - 2011",
    img: "/assets/company/cbury.jpg",
    institute: "Canterbury School",
    degree: "High School",
  },
];

const Education: React.FC = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src={val.img} alt="icon" />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.institute}
          </h5>
          <h5 className="place open-sans-font">{val.degree}</h5>
        </li>
      ))}
    </ul>
  );
};

export default Education;
