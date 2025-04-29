<<<<<<< HEAD
import React from "react";
import { EducationData } from "../../../../server/data";
import useWindowWidth from "../../../hooks/useWindowWidth";
import useMouseEvents from "../../../hooks/useMouseEvents";

const Education: React.FC = () => {
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
      {EducationData.map((val, i) => (
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
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "left",
                  marginLeft: "10px",
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
                  {val.institute}
                </h5>
                <h5
                  style={{
                    fontSize: "14px",
                    margin: "4px 0 0 0",
                    color: "rgba(255, 255, 255, 0.7)",
                    fontWeight: 400,
                  }}
                >
                  {val.degree}
                </h5>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Education;
=======
import React from "react";
import { EducationData } from "../../../../server/data";
import useWindowWidth from "../../../hooks/useWindowWidth";
import useMouseEvents from "../../../hooks/useMouseEvents";

const Education: React.FC = () => {
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
      {EducationData.map((val, i) => (
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
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "left",
                  marginLeft: "10px",
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
                  {val.institute}
                </h5>
                <h5
                  style={{
                    fontSize: "14px",
                    margin: "4px 0 0 0",
                    color: "rgba(255, 255, 255, 0.7)",
                    fontWeight: 400,
                  }}
                >
                  {val.degree}
                </h5>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Education;
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
