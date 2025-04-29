import React, { ReactNode, useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "react-transition-group";
import AnimatedCursor from "react-animated-cursor";

import { Header, Menu, SocialMedia } from "./components/navigation";
<<<<<<< HEAD
=======
import Home from "./components/section/Home";
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
import About from "./components/section/about";
import Blog from "./components/section/Blog";
import Projects from "./components/section/Projects";
import Contact from "./components/section/Contact";
import { setActiveSection, RootState, AppDispatch } from "./redux/store";

type SectionType = () => ReactNode;

const App: React.FC = () => {
  const nodeRef = useRef(null);
  const dispatch: AppDispatch = useDispatch();
  const activeSectionIndex = useSelector(
    (state: RootState) => state.app.activeSectionIndex
  );
<<<<<<< HEAD
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const isMobile = useRef(false);

  const sections: SectionType[] = [
=======

  const sections: SectionType[] = [
    () => <Home />,
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
    () => <About />,
    () => <Projects />,
    () => <Blog />,
    () => <Contact />,
  ];

  const setActiveSectionIndex = (index: number | null): void => {
    dispatch(setActiveSection(index));
  };

  // Function to update the CSS variable for viewport height
  const updateVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
<<<<<<< HEAD
    isMobile.current = window.innerWidth <= 768;
=======
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
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
<<<<<<< HEAD
    updateVh();
  }, []);

  const checkAboutSectionScroll = (direction: number): boolean => {
    if (activeSectionIndex === 0) {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const isAtBottom = aboutSection.scrollHeight - aboutSection.scrollTop <= aboutSection.clientHeight + 1;
        const isAtTop = aboutSection.scrollTop === 0;

        if ((direction > 0 && !isAtBottom) || (direction < 0 && !isAtTop)) {
          return false;
        }
      }
    }
    return true;
  };

  const handleSectionChange = (direction: number) => {
    if (isScrolling.current) return;
    
    isScrolling.current = true;
    let newIndex = (activeSectionIndex || 0) + direction;

    if (!checkAboutSectionScroll(direction)) {
      isScrolling.current = false;
      return;
    }

    newIndex = Math.min(Math.max(0, newIndex), sections.length - 1);

    if (newIndex !== activeSectionIndex) {
      setActiveSectionIndex(newIndex);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  // Handle wheel event for desktop
  const handleWheel = useCallback((event: WheelEvent) => {
    if (isMobile.current) return;
    handleSectionChange(event.deltaY > 0 ? 1 : -1);
  }, [activeSectionIndex, sections.length]);

  // Handle touch events for mobile
  const handleTouchStart = useCallback((event: TouchEvent) => {
    touchStartY.current = event.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    if (!isMobile.current) return;
    
    const touchEndY = event.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;
    
    // Only trigger section change if the swipe is significant enough
    if (Math.abs(diff) > 50) {
      handleSectionChange(diff > 0 ? 1 : -1);
    }
  }, [activeSectionIndex, sections.length]);

  // Set up event listeners on component mount and clean up on unmount
  useEffect(() => {
=======
    updateVh(); // Update the --vh variable on resize as well
  }, []);

  // Set up event listeners on component mount and clean up on unmount
  useEffect(() => {
    // Set initial viewport height
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
    updateVh();

    document.addEventListener("focusin", handleFocusScroll);
    window.addEventListener("resize", handleResize);
<<<<<<< HEAD
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
=======
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8

    return () => {
      document.removeEventListener("focusin", handleFocusScroll);
      window.removeEventListener("resize", handleResize);
<<<<<<< HEAD
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleResize, handleWheel, handleTouchStart, handleTouchEnd]);
=======
    };
  }, [handleResize]);
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8

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
<<<<<<< HEAD
          <Header />
=======
          {activeSectionIndex !== 0 && <Header />}
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
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
<<<<<<< HEAD
              key={index}
=======
              key={index} // Added key to avoid warning
>>>>>>> 424dda00c1aca1e3d45dd577d0f9533266d65bd8
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
