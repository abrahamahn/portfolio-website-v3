import React from "react";

interface MenuItemProps {
  icon: React.ReactNode;
  itemName: string;
  isActive: boolean;
  onClick: () => void;
  isMobile: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  itemName,
  isActive,
  onClick,
  isMobile,
}) => {
  return (
    <li
      className={`item ${isMobile ? "mobile_item" : ""} ${
        isActive ? "active" : ""
      }`}
      onClick={onClick}
    >
      <div className={`item_inner ${isMobile ? "mobile_item_inner" : ""}`}>
        <a onDoubleClick={(e) => e.preventDefault()}>
          <div className="icons">{icon}</div>
          <div className="item_name">{itemName}</div>
        </a>
      </div>
    </li>
  );
};

export default MenuItem;
