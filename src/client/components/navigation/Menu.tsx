import React from "react";
import {
  AboutIcon,
  BlogIcon,
  PortfolioIcon,
  ContactIcon,
  ResearchIcon,
} from "../icons";
import useWindowWidth from "../../hooks/useWindowWidth";

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
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  const handleMenuItemClick = (index: number) => {
    setActiveSectionIndex(index);
    // Remove the section scrolling since we're using transitions
    // const sectionRefs = document.querySelectorAll("section");
    // if (sectionRefs.length > index) {
    //   const sectionRef = sectionRefs[index];
    //   sectionRef.scrollIntoView({ behavior: "smooth" });
    // }
  };

  const MenuItem: MenuItem[] = [
    {
      icon: !isMobile ? (
        <AboutIcon width={24} height={24} color="black" />
      ) : (
        <AboutIcon width={28} height={28} color="white" />
      ),
      itemName: "ABOUT",
      activeClass: activeSectionIndex === 0 ? "active" : "",
    },
    {
      icon: !isMobile ? (
        <PortfolioIcon width={24} height={24} color="black" />
      ) : (
        <PortfolioIcon width={28} height={28} color="white" />
      ),
      itemName: "PROJECT",
      activeClass: activeSectionIndex === 1 ? "active" : "",
    },
    {
      icon: !isMobile ? (
        <ResearchIcon width={24} height={24} color="black" />
      ) : (
        <ResearchIcon width={28} height={28} color="white" />
      ),
      itemName: "RESEARCH",
      activeClass: activeSectionIndex === 2 ? "active" : "",
    },
    {
      icon: !isMobile ? (
        <BlogIcon width={24} height={24} color="black" />
      ) : (
        <BlogIcon width={28} height={28} color="white" />
      ),
      itemName: "BLOG",
      activeClass: activeSectionIndex === 3 ? "active" : "",
    },
    {
      icon: !isMobile ? (
        <ContactIcon width={22} height={22} color="black" />
      ) : (
        <ContactIcon width={28} height={28} color="white" />
      ),
      itemName: "CONTACT",
      activeClass: activeSectionIndex === 4 ? "active" : "",
    },
  ];

  return (
    <div>
      {!isMobile && (
        <div
          style={{
            height: "100px",
            position: "relative",
            top: "60px",
            left: "60px",
            backgroundColor: "transparent",
            zIndex: 98,
            transition: "all 0.3s ease",
            width: "100%",
          }}
        >
          <div className="sidebar">
            <div
              style={{
                width: "100%",
                height: "100%",
                marginTop: "5px",
                padding: "15px 20px",
                textAlign: "left",
                marginLeft: "5px",
              }}
            >
              <h3
                style={{
                  fontSize: "3rem",
                  marginTop: "0px",
                  color: "rgba(255, 255, 255, 0.9)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Abraham Ahn
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "white",
                  marginTop: "-10px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Software Engineer & Music Producer
              </p>
            </div>
            <div style={{ width: "9rem", float: "left", padding: "15px" }}>
              <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
                {MenuItem.map((val, i) => (
                  <li
                    key={i}
                    style={{ margin: 0, width: "100%", float: "left" }}
                  >
                    <div style={{ userSelect: "none" }}>
                      <a
                        style={{
                          display: "flex",
                          alignItems: "center",
                          textDecoration: "none",
                          color:
                            activeSectionIndex === i
                              ? "rgba(255, 255, 255, 0.9)"
                              : "rgba(255, 255, 255, 0.5)",
                          fontSize: activeSectionIndex === i ? "0.9rem" : "0.85rem",
                          fontWeight: 500,
                          borderRadius: "6px",
                          padding: "4px 15px 4px 10px",
                          position: "relative",
                          transition: "all 0.3s ease",
                          marginBottom: "10px",
                        }}
                        onClick={() => handleMenuItemClick(i)}
                        className={
                          i === activeSectionIndex ? val.activeClass : ""
                        }
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
        <div
          style={{
            bottom: 0,
            left: 0,
            width: "100%",
            position: "absolute",
            borderTop: "1px solid rgba(255, 255, 255, 0.359)",
            zIndex: 998,
            height: "50px",
            background: "linear-gradient(#0e1b2472, #10299568)",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div style={{ height: "100%", width: "100%" }}>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                margin: 0,
                padding: 0,
                height: "100%"
              }}
            >
              {MenuItem.map((val, i) => (
                <li
                  key={i}
                  style={{
                    width: "100%",
                    listStyleType: "none",
                    color: "white",
                    fontSize: activeSectionIndex === i ? "0.9rem" : "0.85rem",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  className={activeSectionIndex === i ? "active" : ""}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      backgroundColor: "transparent",
                      borderRadius: "3px",
                    }}
                    onClick={() => handleMenuItemClick(i)}
                  >
                    <div
                      style={{
                        width: "auto",
                        height: "32px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {val.icon}
                    </div>
                    {!isMobile && (
                      <div style={{ fontSize: "10px", userSelect: "none" }}>
                        {val.itemName}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
