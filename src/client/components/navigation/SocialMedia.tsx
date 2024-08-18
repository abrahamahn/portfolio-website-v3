import { SocialMediaData } from "../../../server/data";
import { SocialMediaItem } from "../../../server/data/types";
import useWindowWidth from "../../hooks/useWindowWidth";

const SocialMedia = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  return (
    <div
      style={{
        zIndex: isMobile ? 999 : 998,
        position: "absolute",
        left: isMobile ? "auto" : "0",
        right: isMobile ? "15px" : "auto",
        bottom: isMobile ? "60px" : "0",
        marginBottom: isMobile ? "0" : "75px",
        marginLeft: isMobile ? "0" : "65px",
        marginTop: isMobile ? "0" : "auto",
        listStyleType: "none",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          margin: 0,
          padding: 0,
        }}
      >
        {SocialMediaData.map((val: SocialMediaItem, i: number) => (
          <li
            key={i}
            style={{
              margin: 0,
              display: "flex",
              marginBottom: isMobile ? "15px" : "0px",
              borderRadius: "100%",
              padding: 0,
              width: "35px",
              height: "35px",
              marginRight: isMobile ? "0px" : "5px",
              backgroundColor: isMobile
                ? "rgba(255, 255, 255, 0.302)"
                : "transparent",
              listStyleType: "none",
            }}
          >
            <a
              href={val.link}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "rgba(255, 255, 255, 0.50)",
                display: "inline-block",
                position: "relative",
                lineHeight: 1,
                padding: isMobile ? "9px 9px" : "10px 10px",
                cursor: "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.90)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.50)";
                e.currentTarget.style.transform = "none";
              }}
            >
              {val.iconName}
              <svg
                style={{
                  fill: "transparent",
                  color: "rgba(255, 255, 255, 0.50)",
                  width: "23px",
                  height: "23px",
                  cursor: "none",
                  transition: "all 0.3s ease",
                }}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
