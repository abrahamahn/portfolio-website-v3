import React, { useState, useEffect } from "react";
import ReactTyped from "react-typed";

import { HeaderData, SocialMediaData } from "../../data";
import { SocialMediaItem } from "../../data/types";

const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div>
      {isMobile && (
        <header className="header">
          <div className="header-container">
            <h5 className="name">{HeaderData.name}</h5>
            <h1
              className="title"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Software Engineer & Web Developer
            </h1>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
