import React, { useState, useEffect } from "react";
import {
  HomeIcon,
  AboutIcon,
  BlogIcon,
  PortfolioIcon,
  ContactIcon,
} from "../icons/menu";
interface MenuProps {
  activeSectionIndex: number | null;
  setActiveSectionIndex: (index: number | null) => void;
}

interface MenuItem {
  icon: React.ReactNode;
  itemName: string;
  activeClass: string;
}
const Menu: React.FC<MenuProps> = ({
  activeSectionIndex,
  setActiveSectionIndex,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const handleMenuItemClick = (index: number) => {
    setActiveSectionIndex(index);
    const sectionRefs = document.querySelectorAll("section");
    if (sectionRefs.length > index) {
      const sectionRef = sectionRefs[index];
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  const MenuItem: MenuItem[] = [
    {
      icon: !isMobile ? (
        <HomeIcon width={24} height={24} color="black" />
      ) : (
        <HomeIcon width={22} height={22} color="white" />
      ),
      itemName: "HOME",
      activeClass: activeSectionIndex === 0 ? "active" : "",
    },
    {
      icon: !isMobile ? (
        <AboutIcon width={24} height={24} color="black" />
      ) : (
        <AboutIcon width={22} height={22} color="white" />
      ),
      itemName: "ABOUT",
      activeClass: activeSectionIndex === 1 ? "active" : "",
    },
    {
      icon: !isMobile ? (
        <PortfolioIcon width={24} height={24} color="black" />
      ) : (
        <PortfolioIcon width={22} height={22} color="white" />
      ),
      itemName: "PORTFOLIO",
      activeClass: activeSectionIndex === 2 ? "active" : "",
    },
    {
      icon: !isMobile ? (
        <BlogIcon width={24} height={24} color="black" />
      ) : (
        <BlogIcon width={22} height={22} color="white" />
      ),
      itemName: "BLOG",
      activeClass: activeSectionIndex === 3 ? "active" : "",
    },
    {
      icon: !isMobile ? (
        <ContactIcon width={22} height={22} color="black" />
      ) : (
        <ContactIcon width={22} height={22} color="white" />
      ),
      itemName: "CONTACT",
      activeClass: activeSectionIndex === 4 ? "active" : "",
    },
  ];

  return (
    <div>
      {!isMobile && (
        <div className="sidebar_container">
          <div className="sidebar">
            <div className="logo">
              <h3 className="name">Abraham Ahn</h3>
              <p className="job_title">Software Engineer & Music Producer</p>
            </div>
            <div className="menu">
              <ul className="items">
                {MenuItem.map((val, i) => (
                  <li key={i} className="item">
                    <div className="item_inner">
                      <a
                        className={
                          i === activeSectionIndex ? val.activeClass : ""
                        }
                        onClick={() => handleMenuItemClick(i)}
                      >
                        {val.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div>
          <div className="mobile_footer_container">
            <div className="mobile_footer">
              <ul className="mobile_items">
                {MenuItem.map((val, i) => (
                  <li
                    key={i}
                    className={`mobile_item ${
                      activeSectionIndex === i ? "active" : ""
                    }`}
                  >
                    <div className="mobile_item_inner">
                      <a
                        onClick={() => handleMenuItemClick(i)}
                        onDoubleClick={(e) => e.preventDefault()}
                      >
                        <div className="icons">{val.icon}</div>
                        <div className="item_name">{val.itemName}</div>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
