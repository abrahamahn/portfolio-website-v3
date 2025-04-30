import React, { useState, useEffect } from "react";
import { ResearchData } from "../../../server/data";
import { ResearchItem } from "../../../shared/types";
import useWindowWidth from "../../hooks/useWindowWidth";
import useCarousel from "../../hooks/useCarousel";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ResearchSkeleton from "../skeleton/ResearchSkeleton";

const Research: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [slideDirection, setSlideDirection] = useState<'up' | 'down' | null>(null);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  const pageSize = isMobile ? ResearchData.length : 1;

  const {
    currentPage,
    totalPages,
    handlers,
    handlePageClick,
    handlePageChange,
    handleCarouselClick,
  } = useCarousel(ResearchData.length, pageSize);

  const startIndex = (currentPage - 1) * pageSize;

  // Calculate the starting number for the pagination window
  const getPaginationStart = () => {
    const maxVisible = 7;
    if (totalPages <= maxVisible) return 1;
    
    // If current page is in the first half of the window
    if (currentPage <= Math.ceil(maxVisible / 2)) return 1;
    
    // If current page is in the last half of total pages
    if (currentPage > totalPages - Math.floor(maxVisible / 2)) {
      return totalPages - maxVisible + 1;
    }
    
    // Otherwise, center the window around current page
    return currentPage - Math.floor(maxVisible / 2);
  };

  // Get the numbers to display in pagination
  const getPaginationNumbers = () => {
    const start = getPaginationStart();
    const maxVisible = 7;
    const count = Math.min(maxVisible, totalPages);
    return Array.from({ length: count }, (_, i) => start + i);
  };

  // Custom page change handler with animation
  const handleAnimatedPageChange = (change: number) => {
    setSlideDirection(change > 0 ? 'up' : 'down');
    handlePageChange(change);
    // Reset slide direction after animation
    setTimeout(() => setSlideDirection(null), 300);
  };

  // Custom page click handler with animation
  const handleAnimatedPageClick = (pageNumber: number) => {
    setSlideDirection(pageNumber > currentPage ? 'up' : 'down');
    handlePageClick(pageNumber);
    // Reset slide direction after animation
    setTimeout(() => setSlideDirection(null), 300);
  };

  useEffect(() => {
    // Reset loading state when data changes
    setIsLoading(true);

    // Preload all images
    const imagePromises = ResearchData.map((Research) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = Research.image;
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
  }, [ResearchData]);

  const renderResearchItems = () => {
    if (isLoading) {
      return Array(pageSize)
        .fill(0)
        .map((_, index) => <ResearchSkeleton key={index} />);
    }

    const sortedResearchs = ResearchData.sort(
      (a, b) =>
        new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
    );

    return sortedResearchs.map((Research: ResearchItem, index: number) => {
      const isCurrentItem = index === startIndex;
      const isNextItem = index === startIndex + 1;
      const isPrevItem = index === startIndex - 1;

      return (
        <div
          key={index}
          style={{
            display: "flex",
            margin: "0 auto",
            alignItems: "center",
            borderRadius: "20px",
            maxWidth: isMobile ? "420px" : "600px",
            height: isMobile ? "300px" : "420px",
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            border: "1px solid rgba(255, 255, 255, 0.7)",
            transition: "all 0.3s ease-in-out",
            width: isMobile ? "90%" : "100%",
            opacity: isMobile ? 1 : isCurrentItem ? 1 : isNextItem || isPrevItem ? 0.05 : 0,
            position: isMobile ? "relative" : "absolute",
            pointerEvents: isMobile ? "auto" : isCurrentItem ? "auto" : "none",
            transform: isMobile 
              ? "none" 
              : isCurrentItem
                ? slideDirection 
                  ? `translateY(${slideDirection === 'up' ? '20px' : '-20px'})` 
                  : "translateY(0)"
                : isNextItem
                  ? slideDirection === 'up'
                    ? "translateY(30px)"
                    : "translateY(-30px)"
                : isPrevItem
                  ? slideDirection === 'down'
                    ? "translateY(-30px)"
                    : "translateY(30px)"
                : "translateY(20px)",
            visibility: isMobile ? "visible" : isCurrentItem || isNextItem || isPrevItem ? "visible" : "hidden",
            zIndex: isCurrentItem ? 2 : isNextItem || isPrevItem ? 1 : 0,
          }}
          onClick={() => handleCarouselClick(Research.link)}
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
              href={Research.link}
              target="_blank"
              rel="noreferrer"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "5px",
              }}
            >
              <img
                src={Research.image}
                alt={Research.alt}
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
                    fontSize: isMobile ? "1.2rem" : "1.2rem",
                    margin: "0",
                    padding: "0",
                    color: "white",
                    height: isMobile ? "1.4rem" : "1.4rem",
                    overflow: "hidden",
                    marginBottom: "0.25rem",
                  }}
                >
                  {Research.title}
                </h3>
                <p
                  style={{
                    fontSize: isMobile ? "0.85rem" : "0.85rem",
                    margin: "0px 0 0.15rem 0",
                    color: "white",
                  }}
                >
                  {new Date(Research.postedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                {Research.link && (
                  <p
                    style={{
                      fontSize: isMobile ? "0.85rem" : "0.85rem",
                      margin: "0.15rem 0",
                      color: "white",
                    }}
                  >
                    <a
                      href={Research.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      {new URL(Research.link).hostname}
                    </a>
                  </p>
                )}
                <div
                  style={{
                    display: "flex",
                    fontWeight: 500,
                    width: "auto",
                    marginTop: "8px",
                    gap: "0.15rem",
                    flexWrap: "wrap",
                    marginLeft: "-0.15rem",
                  }}
                >
                  {Research.categories.map((category, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        padding: isMobile ? "4px 4.05px" : "4px 4.05px",
                        color: "white",
                        marginRight: "0.15rem",
                        fontSize: isMobile ? "12px" : "12px",
                        borderRadius: "5px",
                        marginBottom: "0.1rem",
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
                fontSize: isMobile ? "0.85rem" : "0.85rem",
                marginTop: isMobile ? "0.15rem" : "0.15rem",
                color: "white",
                overflow: "scroll",
                paddingTop: "0.15rem",
              }}
            >
              {Research.description}
            </p>
          </div>
        </div>
      );
    });
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
      id="Research"
    >
      <div
        style={{
          width: "100%",
          maxWidth: isMobile ? "1100px" : "90%",
          height: isMobile ? "95%" : "95vh",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "center",
          overflowX: "hidden",
          position: "relative",
          paddingRight: windowWidth <= 1060 ? "60px" : "0",
        }}
        className="Research-container"
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            alignItems: "center",
            justifyContent: isMobile ? "flex-start" : "center",
            gap: "20px",
            overflowY: isMobile ? "auto" : "hidden",
            overflowX: "hidden",
            padding: isMobile ? "20px 5px" : "20px",
            paddingBottom: isMobile ? "110px" : "20px",
            height: "100%",
            scrollbarWidth: isMobile ? "none" : "none",
            msOverflowStyle: "none",
          }}
        >
          {renderResearchItems()}
        </div>
      </div>
      {!isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99,
            padding: "20px",
            position: "absolute",
            right: windowWidth <= 1060 ? "10px" : "20px",
            top: "50%",
            transform: "translateY(-50%)",
            gap: "10px",
          }}
        >
          <FaAngleLeft
            style={{
              transform: "rotate(90deg)",
              width: "25px",
              height: "25px",
              backgroundColor: "transparent",
              cursor: "pointer",
              zIndex: 3,
              transition: "background-color 0.3s ease-in-out",
              color: "rgba(255, 255, 255, 0.7)",
            }}
            onClick={() => handleAnimatedPageChange(-1)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
              e.currentTarget.style.color = "rgba(255, 255, 255, 1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
            }}
          />
          {getPaginationNumbers().map((pageNumber) => (
            <div
              key={pageNumber}
              style={{
                width: "25px",
                height: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
                backgroundColor: currentPage === pageNumber ? "rgba(0, 0, 0, 0.25)" : "transparent",
                color: "white",
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                border: "1px solid rgba(255, 255, 255, 0.7)",
                margin: "5px 0",
                transform: slideDirection 
                  ? `translateY(${slideDirection === 'up' ? '-5px' : '5px'})` 
                  : "translateY(0)",
              }}
              onClick={() => handleAnimatedPageClick(pageNumber)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  currentPage === pageNumber ? "rgba(0, 0, 0, 0.25)" : "transparent")
              }
            >
              {pageNumber}
            </div>
          ))}
          <FaAngleRight
            style={{
              transform: "rotate(90deg)",
              width: "25px",
              height: "25px",
              backgroundColor: "transparent",
              cursor: "pointer",
              zIndex: 3,
              transition: "background-color 0.3s ease-in-out",
              color: "rgba(255, 255, 255, 0.7)",
            }}
            onClick={() => handleAnimatedPageChange(1)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
              e.currentTarget.style.color = "rgba(255, 255, 255, 1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Research;
