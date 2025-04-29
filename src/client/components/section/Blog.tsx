import React, { useState, useEffect } from "react";
import { BlogData } from "../../../server/data";
import { BlogItem } from "../../../shared/types";
import useWindowWidth from "../../hooks/useWindowWidth";
import useCarousel from "../../hooks/useCarousel";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import BlogSkeleton from "../skeleton/BlogSkeleton";

const Blog: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    // Reset loading state when data changes
    setIsLoading(true);

    // Preload all images
    const imagePromises = BlogData.map((blog) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = blog.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    // Set loading to false when all images are loaded
    Promise.all(imagePromises)
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("Error loading images:", error);
        setIsLoading(false);
      });
  }, [BlogData]);

  const renderBlogItems = () => {
    if (isLoading) {
      return Array(pageSize)
        .fill(0)
        .map((_, index) => <BlogSkeleton key={index} />);
    }

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
              href={blog.link}
              target="_blank"
              rel="noreferrer"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "5px",
              }}
            >
              <img
                src={blog.image}
                alt={blog.alt}
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
              <div style={{ width: "100%", overflowX: "hidden" }}>
                <h3
                  style={{
                    fontSize: isMobile ? "0.7rem" : "12px",
                    margin: "0",
                    padding: "0",
                    lineHeight: "1.1",
                    color: "white",
                    height: isMobile ? "1.5rem" : "26px",
                    overflowY: "hidden",
                  }}
                >
                  {blog.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.55rem",
                    margin: "5px 0 -5px 0",
                    color: "white",
                  }}
                >
                  {new Date(blog.postedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                {blog.link && (
                  <p
                    style={{
                      fontSize: "0.55rem",
                      margin: "1px 0",
                      color: "white",
                    }}
                  >
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      {new URL(blog.link).hostname}
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
                  {blog.categories.map((category, index) => (
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
              </div>
            </div>
            <p
              className="description-container"
              style={{
                fontSize: isMobile ? "0.55rem" : "10px",
                marginTop: isMobile ? "5px" : "10px",
                color: "white",
              }}
            >
              {blog.description}
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
        className="blog-container"
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
            paddingBottom: isMobile ? "110px" : undefined,
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
