import { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

const useCarousel = (totalItems: number, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

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
      if (event.key === "ArrowLeft") {
        handlePageChange(-1);
      } else if (event.key === "ArrowRight") {
        handlePageChange(1);
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

  const handlers = useSwipeable({
    onSwipedLeft: () => handlePageChange(1),
    onSwipedRight: () => handlePageChange(-1),
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
