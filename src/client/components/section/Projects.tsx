import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { ProjectsData } from "../../../server/data";
import { ProjectItem } from "../../../server/data/types";
import useWindowWidth from "../../hooks/useWindowWidth";

const Projects: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = isMobile
    ? ProjectsData.length
    : windowWidth < 1080
    ? 3
    : 6;
  const totalPages: number = Math.ceil(ProjectsData.length / pageSize);
  const startIndex: number = (currentPage - 1) * pageSize;
  const endIndex: number = startIndex + pageSize;

  const handleCarouselClick = (link: string) => {
    window.open(link, "_blank");
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handlePageChange(1), // next page
    onSwipedRight: () => handlePageChange(-1), // previous page
    trackMouse: true, // track mouse event as well
  });

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePageChange = (change: number) => {
    if (change === 1 && currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (change === -1 && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleKeyDown = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === "ArrowLeft" && currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
      } else if (event.key === "ArrowRight" && currentPage < totalPages) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    },
    [currentPage, totalPages]
  );

  useEffect(() => {
    const handle = (event: globalThis.KeyboardEvent) => handleKeyDown(event);
    window.addEventListener("keydown", handle);

    return () => {
      window.removeEventListener("keydown", handle);
    };
  }, [handleKeyDown, currentPage]);

  const renderProjectItems = () => {
    return ProjectsData.sort(
      (a, b) =>
        new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
    ).map((project: ProjectItem, index: number) => (
      <div
        key={index}
        style={{
          display: "flex",
          margin: "0 auto",
          alignItems: "center",
          borderRadius: "20px",
          maxWidth: "320px",
          height: "220px",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.7)",
          transition: "background-color 0.3s ease-in-out",
          width: isMobile ? "90%" : "100%",
        }}
        onClick={() => handleCarouselClick(project.link)}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.25)")
        }
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            zIndex: 0,
            borderRight: "1px solid #d5d5d5",
          }}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "5px",
            }}
          >
            <img
              src={project.image}
              alt={project.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px 0px 0px 20px",
              }}
            />
          </a>
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "10px",
            backgroundColor: "#00000007",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                overflowX: "hidden",
              }}
            >
              <h3
                style={{
                  fontSize: isMobile ? "0.8rem" : "12px",
                  margin: "0",
                  padding: "0",
                  color: "white",
                  height: isMobile ? "1rem" : "auto",
                  overflow: "hidden",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "0.55rem",
                  margin: "0px 0 1px 0",
                  color: "white",
                }}
              >
                {new Date(project.postedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              {project.link && (
                <p
                  style={{
                    fontSize: "0.55rem",
                    margin: "1px 0",
                    color: "white",
                  }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                      marginTop: "6px",
                    }}
                  >
                    {new URL(project.link).hostname}
                  </a>
                </p>
              )}
              <div
                style={{
                  display: "flex",
                  fontWeight: 500,
                  width: "auto",
                  marginTop: "8px",
                }}
              >
                {project.categories.map((category, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      padding: "2px",
                      color: "white",
                      marginRight: "3px",
                      fontSize: "8px",
                      borderRadius: "5px",
                    }}
                  >
                    {category}
                  </span>
                ))}
              </div>
              <div
                style={{
                  display: "inline-block",
                  fontWeight: 500,
                  marginRight: "5px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {project.stacks.map((stack, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      padding: "2px",
                      color: "white",
                      marginRight: "3px",
                      fontSize: "8px",
                      borderRadius: "5px",
                    }}
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: isMobile ? "0.55rem" : "10px",
              marginTop: isMobile ? "0px" : "10px",
              color: "white",
              overflow: "scroll",
            }}
          >
            {project.description}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div
      {...handlers}
      style={{
        width: "100%",
        margin: "0 auto",
        height: "calc(var(--vh, 1vh) * 100)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: isMobile ? "absolute" : "relative",
        top: isMobile ? "55px" : undefined,
        bottom: isMobile ? "0px" : undefined,
      }}
      id="projects"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: isMobile ? "95%" : "auto",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "center",
          overflowX: "hidden",
        }}
      >
        {!isMobile && (
          <FaAngleLeft
            style={{
              transform: "translateY(-50%)",
              width: "25px",
              height: "25px",
              margin: "0 10px",
              backgroundColor: "transparent",
              cursor: "pointer",
              zIndex: 3,
              transition: "background-color 0.3s ease-in-out",
              color: "white",
            }}
            onClick={() => handlePageChange(-1)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          />
        )}
        <div
          style={{
            width: "100%",
            display: "grid",
            position: "relative",
            gridTemplateColumns: isMobile
              ? "repeat(auto-fill, minmax(300px, 1fr))"
              : "repeat(auto-fill, minmax(300px, 1fr))",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            overflowX: "hidden",
            padding: isMobile ? "20px 5px" : undefined,
            paddingBottom: isMobile ? "200px" : undefined,
          }}
        >
          {renderProjectItems().slice(startIndex, endIndex)}
        </div>
        {!isMobile && (
          <FaAngleRight
            style={{
              transform: "translateY(-50%)",
              width: "25px",
              height: "25px",
              margin: "0 10px",
              backgroundColor: "transparent",
              cursor: "pointer",
              zIndex: 3,
              transition: "background-color 0.3s ease-in-out",
              color: "white",
            }}
            onClick={() => handlePageChange(1)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          />
        )}
      </div>
      {!isMobile && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            zIndex: 99,
            padding: "20px",
          }}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                backgroundColor: currentPage === index + 1 ? "#000" : "#ccc",
                margin: "0 5px",
                cursor: "pointer",
              }}
              onClick={() => handlePageClick(index + 1)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#aaa")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  currentPage === index + 1 ? "#000" : "#ccc")
              }
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
