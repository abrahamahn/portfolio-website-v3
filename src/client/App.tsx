import React, { ReactNode, useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "react-transition-group";
import AnimatedCursor from "react-animated-cursor";

import { Header, Menu, SocialMedia } from "./components/navigation";
import About from "./components/section/about";
import Blog from "./components/section/Blog";
import Project from "./components/section/Project";
import Research from "./components/section/Research";
import Contact from "./components/section/Contact";
import { setActiveSection, RootState, AppDispatch } from "./redux/store";

type SectionType = () => ReactNode;

const sections: SectionType[] = [
  () => <About />,
  () => <Project />,
  () => <Research />,
  () => <Blog />,
  () => <Contact />,
];

const App: React.FC = () => {
  const nodeRef = useRef(null);
  const dispatch: AppDispatch = useDispatch();
  const activeSectionIndex = useSelector(
    (state: RootState) => state.app.activeSectionIndex
  );
  const isMobile = useRef(false);

  const setActiveSectionIndex = (index: number | null): void => {
    dispatch(setActiveSection(index));
  };

  // Function to update the CSS variable for viewport height
  const updateVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    isMobile.current = window.innerWidth <= 768;
  };

  // Function to handle scrolling to the focused input or textarea
  const handleFocusScroll = (event: FocusEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Function to handle window resize and adjust layout
  const handleResize = useCallback(() => {
    const activeElement = document.activeElement as HTMLElement | null;
    if (
      activeElement &&
      (activeElement.tagName === "INPUT" ||
        activeElement.tagName === "TEXTAREA")
    ) {
      activeElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    updateVh();
  }, []);

  // Set up event listeners on component mount and clean up on unmount
  useEffect(() => {
    updateVh();

    document.addEventListener("focusin", handleFocusScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("focusin", handleFocusScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

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
          <Header />
          <AnimatedCursor
            innerSize={16}
            outerSize={24}
            color="200,200,200"
            outerAlpha={0.5}
            innerScale={0.8}
            outerScale={1.2}
          />
          {sections.map((Section, index) => (
            <Transition
              key={index}
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
