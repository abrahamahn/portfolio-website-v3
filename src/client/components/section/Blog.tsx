import React from "react";
import { BlogData } from "../../../server/data";
import { BlogItem } from "../../../shared/types";

import useWindowWidth from "../../hooks/useWindowWidth";
import useCarousel from "../../hooks/useCarousel";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Blog: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  const pageSize = isMobile ? BlogData.length : 6;
  const {
    currentPage,
    totalPages,
    handlers,
    handlePageChange,
    handlePageClick,
    handleCarouselClick,
  } = useCarousel(BlogData.length, pageSize);

  const renderBlogItems = () => {
    return BlogData.sort(
      (a, b) =>
        new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
    )
      .slice((currentPage - 1) * pageSize, currentPage * pageSize)
      .map((blog: BlogItem, index: number) => (
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
          onClick={() => handleCarouselClick(blog.link)}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.25)")
          }
        >
          {/* Blog Item Content */}
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
      id="blog"
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
          paddingBottom: isMobile ? "7px" : undefined,
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
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            overflowX: "hidden",
            padding: isMobile ? "20px 5px" : undefined,
            paddingBottom: isMobile ? "200px" : undefined,
          }}
        >
          {renderBlogItems()}
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

export default Blog;
