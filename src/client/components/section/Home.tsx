import React, { useState, useEffect } from "react";
import { HeaderData } from "../../../server/data";

const Home: React.FC = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const initialDescription =
    window.innerWidth <= 768 ? HeaderData.mobiledesc : HeaderData.desktopdesc;
  const [description, setDescription] = useState(initialDescription);

  const handleBlendtuneClick = () => {
    window.open("https://blendtune.com/sounds", "_blank");
  };

  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com/@blendtunemusic", "_blank");
  };

  const handleSoundcloudClick = () => {
    window.open("https://www.soundcloud.com/blendtune", "_blank");
  };

  const handlePersonalMusicClick = () => {
    window.open("https://soundcloud.com/meekahstars", "_blank");
  };

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
        <div className="home_header">
          <div className="photo_container">
            <div className="photo">
              <img src="/assets/about/1.jpg" alt="Profile" />
            </div>
          </div>
          <h5 className="title">Abraham Ahn</h5>
          <p className="description">
            Software Engineer & Music Producer {description}
          </p>
          <p className="description">Founder @ Blendtune</p>
        </div>
        <div className="button_container">
          <div className="portfolio_button">
            <button onClick={handleBlendtuneClick}>Blendtune</button>
          </div>
          <div className="portfolio_button">
            <button onClick={handleYoutubeClick}>Youtube</button>
          </div>
          <div className="portfolio_button">
            <button onClick={handleSoundcloudClick}>Soundcloud</button>
          </div>
          <div className="portfolio_button">
            <button onClick={handlePersonalMusicClick}>Personal Music</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
