import { useState, useEffect, useCallback, useRef } from "react";
import { useSwipeable } from "react-swipeable";

const useCarousel = (totalItems: number, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const scrollTimeoutRef = useRef<number>();

  const handlePageChange = (change: number) => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage + change;
      if (newPage < 1) return 1;
      if (newPage > totalPages) return totalPages;
      return newPage;
    });
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        handlePageChange(-1);
      } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        handlePageChange(1);
      }
    },
    [currentPage, totalPages]
  );

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        if (event.deltaY > 0) {
          handlePageChange(1);
        } else if (event.deltaY < 0) {
          handlePageChange(-1);
        }
      }, 50);
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

  useEffect(() => {
    const handle = (event: WheelEvent) => handleWheel(event);
    window.addEventListener("wheel", handle, { passive: true });
    return () => {
      window.removeEventListener("wheel", handle);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleWheel]);

  const handlers = useSwipeable({
    onSwipedLeft: () => handlePageChange(1),
    onSwipedRight: () => handlePageChange(-1),
    onSwipedUp: () => handlePageChange(-1),
    onSwipedDown: () => handlePageChange(1),
    trackMouse: true,
  });

  const handleCarouselClick = (link: string) => {
    window.open(link, "_blank");
  };

  return {
    currentPage,
    totalPages,
    handlers,
    handlePageChange,
    handlePageClick,
    handleCarouselClick,
  };
};

export default useCarousel;

