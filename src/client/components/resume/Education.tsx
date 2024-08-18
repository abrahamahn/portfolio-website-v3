import React from "react";

interface EducationItem {
  degree: string;
  year: string;
  img: string;
  institute: string;
  url: string;
}

const educationContent: EducationItem[] = [
  {
    year: "AUG 2024 — PRESENT",
    img: "/assets/company/yonsei.png",
    institute: "Yonsei University",
    degree: "Master of Science - Computer Science",
    url: "https://www.yonsei.ac.kr/en_sc/",
  },
  {
    year: "AUG 2011 — MAY 2015",
    img: "/assets/company/usc.jpg",
    institute: "University of Southern California",
    degree: "Bachelor of Science - Music Industry",
    url: "https://www.usc.edu/",
  },
];

const Education: React.FC = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="module">
      {educationContent.map((val, i) => (
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
