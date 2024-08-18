import React from "react";
import { LinkIcon } from "../../icons";
import { ExperienceData } from "../../../../server/data";

const Experience: React.FC = () => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="module">
      {ExperienceData.map((val, i) => (
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
