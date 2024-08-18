import React from "react";
import { HeaderData } from "../../../server/data";
import useWindowWidth from "../../hooks/useWindowWidth";

const Header: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  return (
    <div>
      {isMobile && (
        <header
          style={{
            position: "relative",
            width: "100%",
            gridArea: "header",
            height: "4.5rem",
            display: "flex",
            flexDirection: "row",
            borderRadius: "0px",
            paddingTop: "10px",
            backgroundColor: "transparent",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              margin: 0,
              padding: 0,
              flex: 1,
              alignItems: "center",
            }}
          >
            <h5
              style={{
                fontSize: "28px",
                color: "white",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {HeaderData.name}
            </h5>
            <h1
              style={{
                fontSize: "11px",
                color: "white",
                textAlign: "center",
              }}
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
