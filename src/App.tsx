import React, { ReactNode, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "react-transition-group";
import AnimatedCursor from "react-animated-cursor";

import { Header, Menu, SocialMedia } from "./components/navigation";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Blog from "./components/section/Blog";
import Portfolio from "./components/section/Portfolio";
import Contact from "./components/section/Contact";
import { setActiveSection, RootState, AppDispatch } from "./store/store";

type SectionType = () => ReactNode;

const App: React.FC = () => {
  const nodeRef = useRef(null);
  const dispatch: AppDispatch = useDispatch();
  const activeSectionIndex = useSelector(
    (state: RootState) => state.app.activeSectionIndex
  );

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

  const sections: SectionType[] = [
    () => (
      <Home
        handleBlendtuneClick={handleBlendtuneClick}
        handleYoutubeClick={handleYoutubeClick}
        handleSoundcloudClick={handleSoundcloudClick}
        handlePersonalMusicClick={handlePersonalMusicClick}
      />
    ),
    () => <About />,
    () => <Portfolio />,
    () => <Blog />,
    () => <Contact />,
  ];

  const setActiveSectionIndex = (index: number | null): void => {
    dispatch(setActiveSection(index));
  };

  // Function to update the CSS variable for viewport height
  const updateVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  // Function to handle scrolling to the focused input or textarea
  const handleFocusScroll = (event: FocusEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Function to handle window resize and adjust layout
  const handleResize = () => {
    const activeElement = document.activeElement as HTMLElement | null;
    if (
      activeElement &&
      (activeElement.tagName === "INPUT" ||
        activeElement.tagName === "TEXTAREA")
    ) {
      activeElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    updateVh(); // Update the --vh variable on resize as well
  };

  // Set up event listeners on component mount and clean up on unmount
  useEffect(() => {
    // Set initial viewport height
    updateVh();

    document.addEventListener("focusin", handleFocusScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("focusin", handleFocusScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className={`main-container ? "disable-animation" : ""}`}>
        <div className="menu-container">
          <Menu
            activeSectionIndex={activeSectionIndex}
            setActiveSectionIndex={setActiveSectionIndex}
          />
        </div>
        <div className="sub-container">
          {activeSectionIndex !== 0 && <Header />}
          <AnimatedCursor
            innerSize={16}
            outerSize={28}
            color="200,200,200"
            outerAlpha={0.5}
            innerScale={0.8}
            outerScale={1.4}
          />
          {sections.map((Section, index) => (
            <Transition
              key={index} // Added key to avoid warning
              in={activeSectionIndex === index}
              timeout={250}
              nodeRef={nodeRef}
            >
              {(state: string) => (
                <div className={`transition transition-${state}`}>
                  {activeSectionIndex === index && <Section />}
                </div>
              )}
            </Transition>
          ))}
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default App;
