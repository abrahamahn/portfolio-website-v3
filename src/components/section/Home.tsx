import React, { useState, useEffect } from "react";
import ReactTyped from "react-typed";

import { HeaderData } from "../../data";

interface HomeProps {
  handleAboutClick: () => void;
  handlePortfolioClick: () => void;
  handleBlogClick: () => void;
  handleContactClick: () => void;
}

const Home: React.FC<HomeProps> = ({
  handleAboutClick,
  handlePortfolioClick,
}) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const initialDescription =
    window.innerWidth <= 768 ? HeaderData.mobiledesc : HeaderData.desktopdesc;
  const [description, setDescription] = useState(initialDescription);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (viewportWidth <= 768) {
      // assuming 768px is the breakpoint for mobile
      setDescription(HeaderData.mobiledesc);
    } else {
      setDescription(HeaderData.desktopdesc);
    }
  }, [viewportWidth]);

  return (
    <div className="home" id="home">
      <div className="content">
        <div className="extra">
          <h5 className="name">{HeaderData.name}</h5>
          <h1
            className="title"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <ReactTyped
                loop
                typeSpeed={125}
                backSpeed={25}
                strings={[
                  "Software Engineer.",
                  "Web Designer.",
                  "Marketing Manager.",
                ]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>
          <p className="text">{description}</p>
          <div className="button_container">
            <div className="portfolio_button">
              <button onClick={handlePortfolioClick}>Portfolio</button>
            </div>
            <div className="resume_button">
              <button onClick={handleAboutClick}>Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
