import React from "react";
import { LinkIcon } from "../icons/menu";

interface ExperienceItem {
  year: string;
  img: string;
  position: string | string[];
  companyName: string | string[];
  details: string;
  technologies?: string[];
  url: string;
}

const experienceContent: ExperienceItem[] = [
  {
    year: "Nov 2023 — Present",
    img: "/assets/company/blendtune.jpg",
    position: "Founder",
    companyName: "Blendtune",
    details: `Music web studio and library with advanced keyword search, genre and tempo filters, key combinations, music player, sorting options, and ongoing backend development on Node.js and PostgreSQL.`,
    technologies: [
      "Javascript",
      "Typescript",
      "React js",
      "HTML/CSS",
      "Next.js",
      "Node.js",
      "React",
      "PostgreSQL",
    ],
    url: "https://blendtune.com/",
  },
  {
    year: "Aug 2023 — Nov 2023",
    img: "/assets/company/stadium-skills.jpg",
    position: "Lead Backend Engineer",
    companyName: "Stadium Skills, Inc.",
    details: `Directed both front-end and back-end development, ensuring seamless coordination with another front-end engineer. Successfully completed MVP development within 2 months, delivering features such as user signup, authentication, dashboard, bio page, user directory, and video chat functionality.`,
    technologies: [
      "Javascript",
      "Typescript",
      "React js",
      "SCSS",
      "Next.js",
      "Node.js",
      "React",
      "Firebase",
      "NoSQL",
    ],
    url: "https://stadiumskills.com/",
  },
  {
    year: "Jan 2018 — Jun 2020",
    img: "/assets/company/cashrollie.jpg",
    position: "Founder",
    companyName: "Cashrollie",
    details: `Produced over 120 music catalogs with 15+ years of experience in music production. Built and managed a team of 8 remote contractors overseas, overseeing data mining and collection projects, with effective communication in English and Spanish. Developed complex responsive web applications and led digital marketing campaigns, including SEO, PPC, social media, email marketing (Mailchimp), sales funnels, and content marketing. These efforts resulted in 972,000+ YouTube streams and 195,000+ followers across platforms like Facebook, YouTube, TikTok, and Instagram. Automated production pipelines and repetitive tasks, reducing labor costs by approximately 25%. A track from our music catalog was featured in the final round of the Chinese national TV show "Rap of China.`,
    technologies: ["HTML/CSS", "WordPress", "PHP"],
    url: "https://www.youtube.com/watch?v=Ts-Pwl388pI",
  },
  {
    year: "Jan 2017 — Dec 2017",
    img: "/assets/company/nick.jpg",
    position: "Web Developer",
    companyName: "Nick Hadim Group of Companies",
    details: `Collaborated with executives and investors to develop a user-friendly website, conducting A/B testing and analyzing web analytics to enhance performance and conversion rates. Developed and executed digital marketing strategies, including SEO, PPC, social media marketing, Google Analytics, email marketing, and content marketing, resulting in a 360% increase in listing inquiries and a social media following of over 15,000.`,
    technologies: ["HTML/CSS", "WordPress", "PHP"],
    url: "https://nickhadim.com/",
  },
  {
    year: "2012 — 2017",
    img: "/assets/company/portal.jpg",
    position: [
      "Freelancer",
      "Music Publishing Consultant",
      "Music Producer & Sound Design Consultant",
      "TV Ads Music Producer",
      "Event Operations Coordinator",
      "Music Curator",
      "Product Design Analyst and Strategy Advisor",
    ],
    companyName: [
      "Portal Music Group",
      "Far East Movement",
      "K-Pop Artists and Rappers",
      "Google, KIA, Ensure, JW Marriott",
      "Ultra Music Korea, World DJ Festival",
      "Markus Persson",
      "Native Instruments",
    ],
    details: `Developed a back-end administration system for managing legal documents and contracts for clients, leveraging copyright expertise from USC's Music Industry program. Provided artist support, including merchandise production, music video coordination, and tour management, to enhance career opportunities. Mentored Korean hip-hop artists and K-Pop track makers in sound design. Produced music and sound effects for TV ads for clients. Coordinated short film productions, managing scheduling, budgeting, and logistics. Facilitated bilingual communication and managed backstage teams at major music festivals like Ultra Music Korea. Curated music projects for high-profile events. Conducted competitive analysis and provided strategic product design recommendations.`,
    url: "",
  },
  {
    year: "Jan 2016 — Oct 2016",
    img: "/assets/company/sunrun.jpg",
    position: "Sales Associate",
    companyName: "Sunrun",
    details: `Achieved over $100,000 in annual revenue through door-to-door sales of residential solar panels, converting more than 4,000 cold prospects per month into warm leads and consistently closing an average of 60 deals per month in the Los Angeles Metropolitan Area.`,
    url: "https://sunrun.com/",
  },
  {
    year: "Aug 2013 — Dec 2013",
    img: "/assets/company/axs.jpg",
    position: "Product and Marketing Intern",
    companyName: "AXS.com",
    details: `Streamlined ticket sales data by rectifying 3,700 entries with 0% error, ensuring precise sales reporting and accurate financial analysis. Improved conversion rates by 10% through A/B testing of the ExactTarget plugin, enhancing user experience, engagement, and revenue. Developed a data-driven algorithm utilizing social media data, improving sales forecast accuracy by 25% for better event planning and resource allocation. Enhanced the AXS iOS application, leading to improved performance, user experience, and customer satisfaction. Optimized email marketing campaigns for a 2 million subscriber base, increasing engagement, open rates, and retention. Boosted online visibility by conducting keyword research and creating a 500+ word SEO-optimized Wikipedia page, increasing organic traffic and brand visibility.`,
    url: "https://axs.com/",
  },
];

const Experience: React.FC = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="module">
      {experienceContent.map((val, i) => (
        <li key={i} onClick={() => handleClick(val.url)}>
          <div className="year">
            <p>{val.year}</p>
          </div>
          <div className="heading">
            <div className="title">
              <div className="icon">
                <img src={val.img} alt="icon" />
              </div>
              <div className="position-title">
                {Array.isArray(val.position) ? (
                  <div className="sub-positions">
                    <div className="main-position">
                      <h5>
                        {val.position[0]} <span> ∙ </span> {val.companyName[0]}
                      </h5>
                      <div className="link-icon">
                        <LinkIcon width={15} height={15} color="white" />
                      </div>
                    </div>
                    <div>
                      {val.position.slice(1).map((pos, idx) => (
                        <h6 key={idx}>
                          {pos} <span> • </span> {val.companyName[idx + 1]}
                        </h6>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <h5>
                      {val.position} ∙ {val.companyName}
                    </h5>
                    <div className="link-icon">
                      <LinkIcon width={15} height={15} color="white" />
                    </div>
                  </>
                )}
              </div>
            </div>
            <p>{val.details}</p>
            {val.technologies && (
              <ul className="technologies-list">
                {val.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </div>
  );
};

export default Experience;
