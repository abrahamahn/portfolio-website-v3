import React from "react";
import { HeaderData } from "../../../server/data";
import useWindowWidth from "../../hooks/useWindowWidth";

const Home: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

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

  return (
    <div
      id="home"
      style={{
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
      }}
    >
      <div
        style={{
          margin: "0 auto",
          padding: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          marginTop: isMobile ? "-70px" : "0px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            margin: "0",
            padding: "0",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              <img
                src="/assets/about/1.jpg"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
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
          <p
            style={{
              fontSize: "0.80rem",
              color: "white",
              textAlign: "center",
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            Software Engineer & Music Producer
          </p>
          <p
            style={{
              fontSize: "0.80rem",
              color: "white",
              textAlign: "center",
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            Founder @ Blendtune
          </p>
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
          <div style={{ marginBottom: "5px", width: "100%" }}>
            <button
              onClick={handleBlendtuneClick}
              style={{
                borderRadius: "10px",
                margin: "5px",
                width: isMobile ? "75%" : "95%",
                textDecoration: "none",
                fontWeight: 400,
                color: "white",
                background: "transparent",
                fontSize: "0.95rem",
                padding: "1rem",
                border: "2px solid rgba(255, 255, 255, 0.41)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Blendtune
            </button>
          </div>
          <div style={{ marginBottom: "5px", width: "100%" }}>
            <button
              onClick={handleYoutubeClick}
              style={{
                borderRadius: "10px",
                margin: "5px",
                width: isMobile ? "75%" : "95%",
                textDecoration: "none",
                fontWeight: 400,
                color: "white",
                background: "transparent",
                fontSize: "0.95rem",
                padding: "1rem",
                border: "2px solid rgba(255, 255, 255, 0.41)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Youtube
            </button>
          </div>
          <div style={{ marginBottom: "5px", width: "100%" }}>
            <button
              onClick={handleSoundcloudClick}
              style={{
                borderRadius: "10px",
                margin: "5px",
                width: isMobile ? "75%" : "95%",
                textDecoration: "none",
                fontWeight: 400,
                color: "white",
                background: "transparent",
                fontSize: "0.95rem",
                padding: "1rem",
                border: "2px solid rgba(255, 255, 255, 0.41)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Soundcloud
            </button>
          </div>
          <div style={{ marginBottom: "5px", width: "100%" }}>
            <button
              onClick={handlePersonalMusicClick}
              style={{
                borderRadius: "10px",
                margin: "5px",
                width: isMobile ? "75%" : "95%",
                textDecoration: "none",
                fontWeight: 400,
                color: "white",
                background: "transparent",
                fontSize: "0.95rem",
                padding: "1rem",
                border: "2px solid rgba(255, 255, 255, 0.41)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Personal Music
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
