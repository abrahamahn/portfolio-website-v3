import { useState } from "react";

const useMouseEvents = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return {
    hoveredIndex,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  };
};

export default useMouseEvents;
