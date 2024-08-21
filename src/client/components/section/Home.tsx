import React from "react";
import { HeaderData } from "../../../server/data";
import useWindowWidth from "../../hooks/useWindowWidth";

const Home: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  const handleButtonClick = (url: string) => {
    window.open(url, "_blank");
  };

  const buttonStyle: React.CSSProperties = {
    borderRadius: "10px",
    margin: "5px",
    textDecoration: "none",
    fontWeight: 400,
    color: "white",
    background: "transparent",
    fontSize: "0.95rem",
    padding: "1rem",
    border: "2px solid rgba(255, 255, 255, 0.41)",
    transition: "transform 0.2s",
    width: isMobile ? "75%" : "95%",
  };

  const containerStyle: React.CSSProperties = {
    width: "100%",
    height: "calc(var(--vh, 1vh) * 100)",
    position: isMobile ? "absolute" : "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    margin: "0px",
    padding: "0px",
    top: isMobile ? "0" : undefined,
    bottom: isMobile ? "0" : undefined,
  };

  const contentStyle: React.CSSProperties = {
    margin: "0 auto",
    padding: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    marginTop: isMobile ? "-70px" : "0px",
    width: "100%",
  };

  const profileImageStyle: React.CSSProperties = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    overflow: "hidden",
    margin: "0 auto",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "0.80rem",
    color: "white",
    textAlign: "center",
    fontWeight: 500,
    lineHeight: 1.5,
  };

  const Button = ({ text, onClick }: { text: string; onClick: () => void }) => (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-5px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      {text}
    </button>
  );

  return (
    <div id="home" style={containerStyle}>
      <div style={contentStyle}>
        <div>
          <div style={{ marginBottom: "10px" }}>
            <div style={profileImageStyle}>
              <img
                src="/assets/about/1.jpg"
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <h5
            style={{
              fontSize: "2rem",
              color: "white",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            {HeaderData.name}
          </h5>
          <p style={textStyle}>Software Engineer & Music Producer</p>
          <p style={textStyle}>Founder @ Blendtune</p>
        </div>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: isMobile ? "50%" : "250px",
          }}
        >
          <Button
            text="Blendtune"
            onClick={() => handleButtonClick("https://blendtune.com/sounds")}
          />
          <Button
            text="Youtube"
            onClick={() =>
              handleButtonClick("https://www.youtube.com/@blendtunemusic")
            }
          />
          <Button
            text="Soundcloud"
            onClick={() =>
              handleButtonClick("https://www.soundcloud.com/blendtune")
            }
          />
          <Button
            text="Personal Music"
            onClick={() =>
              handleButtonClick("https://soundcloud.com/meekahstars")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
