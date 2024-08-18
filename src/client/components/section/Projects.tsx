import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { ProjectsData } from "../../../server/data";
import { ProjectItem } from "../../../server/data/types";

const Projects: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = isMobile
    ? ProjectsData.length
    : window.innerWidth < 1080
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
        className="carousel"
        onClick={() => handleCarouselClick(project.link)}
      >
        <div className="image_container">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="details"
          >
            <img className="image" src={project.image} alt={project.alt} />
          </a>
        </div>
        <div className="info_container">
          <div className="info_top">
            <div className="info_top_inner">
              <h3 className="title">{project.title}</h3>
              <p className="date">
                {new Date(project.postedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              {project.link && (
                <p className="domain">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    {new URL(project.link).hostname}
                  </a>
                </p>
              )}
              <div className="category">
                {project.categories.map((category, index) => (
                  <span key={index} className={`category ${category}`}>
                    {category}
                  </span>
                ))}
              </div>
              <div className="stack">
                {project.stacks.map((stack, index) => (
                  <span key={index} className={`stack ${stack}`}>
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="description">{project.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <div {...handlers} className="projects_container" id="projects">
      <div className={`projects${isMobile ? " scrollable" : ""}`}>
        {!isMobile && (
          <FaAngleLeft
            className="page-change-icon left"
            onClick={() => handlePageChange(-1)}
          />
        )}
        <div className={`carousel_container${isMobile ? "" : " full-list"}`}>
          {renderProjectItems().slice(startIndex, endIndex)}
        </div>
        {!isMobile && (
          <FaAngleRight
            className="page-change-icon right"
            onClick={() => handlePageChange(1)}
          />
        )}
      </div>
      {!isMobile && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className={`dot ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => handlePageClick(index + 1)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
