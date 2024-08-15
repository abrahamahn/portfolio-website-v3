import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { BlogData } from "../../data";

const Blog: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => setWindowWidth(window.innerWidth), []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const isMobile = windowWidth <= 768;

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = window.innerWidth < 768 ? BlogData.length : 6;
  const totalPages = Math.ceil(BlogData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const handleCarouselClick = (link: string) => {
    window.open(link, "_blank");
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handlePageChange(1),
    onSwipedRight: () => handlePageChange(-1),
    trackMouse: true,
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
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
      } else if (event.key === "ArrowRight" && currentPage < totalPages) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    },
    [currentPage, totalPages]
  );

  useEffect(() => {
    const handle = (event: KeyboardEvent) => handleKeyDown(event);
    window.addEventListener("keydown", handle);

    return () => {
      window.removeEventListener("keydown", handle);
    };
  }, [handleKeyDown]);

  const renderBlogItems = () => {
    return BlogData.sort(
      (a, b) =>
        new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
    ).map((blog, index) => (
      <div
        key={index}
        className="carousel"
        onClick={() => handleCarouselClick(blog.link)}
      >
        <div className="image_container">
          <a
            href={blog.link}
            target="_blank"
            rel="noreferrer"
            className="details"
          >
            <img className="image" src={blog.image} alt={blog.alt} />
          </a>
        </div>
        <div className="info_container">
          <div className="info_top">
            <div className="info_top_inner">
              <h3 className="title">{blog.title}</h3>
              <p className="date">
                {new Date(blog.postedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              {blog.link && (
                <p className="domain">
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    {new URL(blog.link).hostname}
                  </a>
                </p>
              )}
              <div className="category">
                {blog.categories.map((category, index) => (
                  <span key={index} className={`category ${category}`}>
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="description">{blog.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <div {...handlers} className="blog_container" id="blog">
      <div className={`blog${isMobile ? " scrollable" : ""}`}>
        {!isMobile && (
          <FaAngleLeft
            className="page-change-icon left"
            onClick={() => handlePageChange(-1)}
          />
        )}
        <div className={`carousel_container${isMobile ? "" : " full-list"}`}>
          {renderBlogItems().slice(startIndex, endIndex)}
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

export default Blog;
