<<<<<<< HEAD
import React from "react";
import { LinkIcon } from "../../icons";
import { ExperienceData } from "../../../../server/data";
import useWindowWidth from "../../../hooks/useWindowWidth";
import useMouseEvents from "../../../hooks/useMouseEvents";

const Experience: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;
  const { hoveredIndex, handleMouseEnter, handleMouseLeave, handleClick } =
    useMouseEvents();

  return (
    <div
      style={{
        margin: "0px",
        padding: isMobile ? "0 5px" : "0 20px",
        listStyle: "none",
        width: "100%",
      }}
    >
      {ExperienceData.map((val, i) => (
        <li
          key={i}
          onClick={() => handleClick(val.url)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          style={{
            width: "100%",
            position: "relative",
            margin: "15px 0",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            padding: "12px",
            borderRadius: "5px",
            boxSizing: "border-box",
            backgroundColor:
              hoveredIndex === i ? "rgba(255, 255, 255, 0.106)" : "transparent",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "200px",
              padding: isMobile ? "0 0 12px 0" : "5px",
            }}
          >
            <p
              style={{
                width: "200px",
                color: "rgba(255, 255, 255, 0.546)",
                textTransform: "uppercase",
                fontSize: "0.75rem",
              }}
            >
              {val.year}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  position: "relative",
                  lineHeight: "0px",
                  textAlign: "center",
                  zIndex: 1,
                  borderRadius: "100%",
                  color: "#fff",
                  backgroundColor: "#000000",
                  backgroundSize: "contain",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                  src={val.img}
                  alt="icon"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "100%",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                {Array.isArray(val.position) ? (
                  <div
                    style={{
                      color: "white",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <h5
                        style={{
                          fontSize: "16px",
                          margin: "0px",
                          color: "white",
                          fontWeight: 400,
                          fontStyle: "Inter",
                        }}
                      >
                        {val.position[0]} <span> ∙ </span> {val.companyName[0]}
                      </h5>
                      <div
                        style={{
                          margin: "3px 5px 0px 5px",
                        }}
                      >
                        <LinkIcon width={15} height={15} color="white" />
                      </div>
                    </div>
                    <div>
                      {val.position.slice(1).map((pos, idx) => (
                        <h6
                          key={idx}
                          style={{
                            fontSize: "14px",
                            margin: "4px 0 0 0",
                            color: "rgba(255, 255, 255, 0.7)",
                            fontWeight: 400,
                          }}
                        >
                          {pos} <span> • </span> {val.companyName[idx + 1]}
                        </h6>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <h5
                      style={{
                        fontSize: "16px",
                        margin: "0px",
                        color: "white",
                        fontWeight: 400,
                        fontStyle: "Inter",
                      }}
                    >
                      {val.position} ∙ {val.companyName}
                    </h5>
                    <div
                      style={{
                        margin: "3px 5px 0px 5px",
                      }}
                    >
                      <LinkIcon width={15} height={15} color="white" />
                    </div>
                  </>
                )}
              </div>
            </div>
            <p
              style={{
                margin: "12px 0px",
                fontSize: "0.85rem",
                color: "rgba(255, 255, 255, 0.5)",
                lineHeight: 1.3,
              }}
            >
              {val.details}
            </p>
            {val.technologies && (
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                }}
              >
                {val.technologies.map((tech, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: "10px",
                      backgroundColor: "rgba(0, 200, 255, 0.316)",
                      color: "rgb(164, 229, 255)",
                      padding: "10px",
                      borderRadius: "20px",
                      margin: "0px 5px 5px 0px",
                    }}
                  >
                    {tech}
                  </li>
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
=======
import React from "react";
import { LinkIcon } from "../../icons";
import { ExperienceData } from "../../../../server/data";
import useWindowWidth from "../../../hooks/useWindowWidth";
import useMouseEvents from "../../../hooks/useMouseEvents";

const Experience: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;
  const { hoveredIndex, handleMouseEnter, handleMouseLeave, handleClick } =
    useMouseEvents();

  return (
    <div
      style={{
        margin: "0px",
        padding: isMobile ? "0 5px" : "0 20px",
        listStyle: "none",
        width: "100%",
      }}
    >
      {ExperienceData.map((val, i) => (
        <li
          key={i}
          onClick={() => handleClick(val.url)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          style={{
            width: "100%",
            position: "relative",
            margin: "15px 0",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            padding: "12px",
            borderRadius: "5px",
            boxSizing: "border-box",
            backgroundColor:
              hoveredIndex === i ? "rgba(255, 255, 255, 0.106)" : "transparent",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "200px",
              padding: isMobile ? "0 0 12px 0" : "5px",
            }}
          >
            <p
              style={{
                width: "200px",
                color: "rgba(255, 255, 255, 0.546)",
                textTransform: "uppercase",
                fontSize: "0.75rem",
              }}
            >
              {val.year}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  position: "relative",
                  lineHeight: "0px",
                  textAlign: "center",
                  zIndex: 1,
                  borderRadius: "100%",
                  color: "#fff",
                  backgroundColor: "#000000",
                  backgroundSize: "contain",
                }}
              >
                <img
                  src={val.img}
                  alt="icon"
                  style={{ borderRadius: "100%" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                {Array.isArray(val.position) ? (
                  <div
                    style={{
                      color: "white",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <h5
                        style={{
                          fontSize: "16px",
                          margin: "0px",
                          color: "white",
                          fontWeight: 400,
                          fontStyle: "Inter",
                        }}
                      >
                        {val.position[0]} <span> ∙ </span> {val.companyName[0]}
                      </h5>
                      <div
                        style={{
                          margin: "3px 5px 0px 5px",
                        }}
                      >
                        <LinkIcon width={15} height={15} color="white" />
                      </div>
                    </div>
                    <div>
                      {val.position.slice(1).map((pos, idx) => (
                        <h6
                          key={idx}
                          style={{
                            fontSize: "14px",
                            margin: "4px 0 0 0",
                            color: "rgba(255, 255, 255, 0.7)",
                            fontWeight: 400,
                          }}
                        >
                          {pos} <span> • </span> {val.companyName[idx + 1]}
                        </h6>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <h5
                      style={{
                        fontSize: "16px",
                        margin: "0px",
                        color: "white",
                        fontWeight: 400,
                        fontStyle: "Inter",
                      }}
                    >
                      {val.position} ∙ {val.companyName}
                    </h5>
                    <div
                      style={{
                        margin: "3px 5px 0px 5px",
                      }}
                    >
                      <LinkIcon width={15} height={15} color="white" />
                    </div>
                  </>
                )}
              </div>
            </div>
            <p
              style={{
                margin: "12px 0px",
                fontSize: "0.85rem",
                color: "rgba(255, 255, 255, 0.5)",
                lineHeight: 1.3,
              }}
            >
              {val.details}
            </p>
            {val.technologies && (
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                }}
              >
                {val.technologies.map((tech, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: "10px",
                      backgroundColor: "rgba(0, 200, 255, 0.316)",
                      color: "rgb(164, 229, 255)",
                      padding: "10px",
                      borderRadius: "20px",
                      margin: "0px 5px 5px 0px",
                    }}
                  >
                    {tech}
                  </li>
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
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
