import React from "react";

interface PersonalInfoItem {
  meta: string;
  metaInfo: string;
}

const personalInfoContent: PersonalInfoItem[] = [
  { meta: "first name", metaInfo: "Abraham " },
  { meta: "last name", metaInfo: "Ahn" },
  { meta: "Age", metaInfo: "32" },
  { meta: "Nationality", metaInfo: "United States" },
  { meta: "Email", metaInfo: "satmorningrain@gmail.com" },
  { meta: "langages", metaInfo: "English, Korean, Spanish" },
];

const PersonalInfo: React.FC = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
