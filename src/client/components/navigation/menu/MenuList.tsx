import React from "react";
import MenuItem from "./MenuItem";

interface MenuListProps {
  items: {
    icon: React.ReactNode;
    itemName: string;
    activeClass: string;
  }[];
  activeSectionIndex: number | null;
  setActiveSectionIndex: (index: number | null) => void;
  isMobile: boolean;
}

const MenuList: React.FC<MenuListProps> = ({
  items,
  activeSectionIndex,
  setActiveSectionIndex,
  isMobile,
}) => {
  const handleMenuItemClick = (index: number) => {
    setActiveSectionIndex(index);
    const sectionRefs = document.querySelectorAll("section");
    if (sectionRefs.length > index) {
      const sectionRef = sectionRefs[index];
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className={isMobile ? "mobile_items" : "items"}>
      {items.map((item, i) => (
        <MenuItem
          key={i}
          icon={item.icon}
          itemName={item.itemName}
          isActive={activeSectionIndex === i}
          onClick={() => handleMenuItemClick(i)}
          isMobile={isMobile}
        />
      ))}
    </ul>
  );
};

export default MenuList;
