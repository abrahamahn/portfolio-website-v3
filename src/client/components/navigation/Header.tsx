import React from "react";
import { HeaderData } from "../../../server/data";
import useWindowWidth from "../../hooks/useWindowWidth";

const Header: React.FC = () => {
  const windowWidth = useWindowWidth();

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
              Software Engineer & Music Producer
            </h1>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
