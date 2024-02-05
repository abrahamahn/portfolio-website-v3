import React from "react";

interface ExperienceItem {
  year: string;
  img: string;
  position: string;
  companyName: string;
  details: string;
}

const experienceContent: ExperienceItem[] = [
  {
    year: "Nov 2023 - Present",
    img: "/assets/company/blendtune.jpg",
    position: "Founding Engineer",
    companyName: "Blendtune",
    details: `Music licensing platform.`,
  },
  {
    year: "Aug 2023 - Nov 2023",
    img: "/assets/company/stadium-skills.jpg",
    position: "Lead Backend Engineer (Contractor)",
    companyName: "Stadium Skills, Inc.",
    details: `Sports recruiting platform.`,
  },
  {
    year: "Jan 2018 - June 2020",
    img: "/assets/company/cashrollie.jpg",
    position: "Founder",
    companyName: "Cashrollie",
    details: `Music production and publishing company for artists and content creators.`,
  },
  {
    year: "Jan 2017 - Dec 2017",
    img: "/assets/company/nick.jpg",
    position: "Web Developer and Marketing Manager",
    companyName: "Nick Hadim Group of Companies",
    details: `Commercial real estate property management company based in Los Angeles.`,
  },
  {
    year: "May 2012 - Jan 2017",
    img: "/assets/company/portal.jpg",
    position: "Founder & Freelancer",
    companyName: "Portal Music Group",
    details: `Client: Transparent Agency, Far East Movement, Dumbfoundead, Native Instruments, Splice, Google, KIA, GE, Ensure, JW Marriott, Markus Persson, Ultra Music Festival`,
  },
  {
    year: "Jan 2016 - Oct 2016",
    img: "/assets/company/sunrun.jpg",
    position: "Sales Associate",
    companyName: "Sunrun",
    details: `Generated $100,000+/yr revenue with door-to-door sales, 4,000+/mo cold prospects, and averaged 60+/mo closes.`,
  },
  {
    year: "Aug 2013 - Dec 2013",
    img: "/assets/company/axs.jpg",
    position: "Product and Marketing Intern",
    companyName: "AXS.com",
    details: `Online ticketing service platform owned by Anschutz Entertainment Group (AEG).`,
  },
];

const Experience: React.FC = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src={val.img} alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">{val.position}</h5>
          <h5 className="place open-sans-font">{val.companyName}</h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
