import { useState, useEffect, useRef } from "react";
import Background from "./animations/Background/Background";
import Shutter from "./animations/Shutter";

// Styles for the component
const styles = {
  container: "relative w-full",
  heroSection: "relative h-screen w-full z-10",
  nextSection:
    "relative h-screen w-full flex items-center justify-center bg-purple-900 text-white text-3xl font-bold mt-[600px] z-20",
  textContainer:
    "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 transition-opacity duration-500 z-10",
  heading: "text-white text-5xl font-bold mb-6 drop-shadow-lg",
  description: "text-white max-w-2xl mx-auto drop-shadow-md",
  buttonContainer:
    "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-500 z-10",
  button:
    "bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-purple-100 transition-colors duration-300",
  scrollIndicator:
    "fixed bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 z-10",
  scrollText: "mb-2 text-sm font-light text-white",
  scrollIconContainer:
    "w-6 h-10 border-2 border-white rounded-full flex justify-center",
  scrollDot: "w-1 h-3 bg-white rounded-full mt-2 animate-bounce",
};

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [scrollUnlocked, setScrollUnlocked] = useState(false);
  const lastScrollTopRef = useRef(0);
  const nextSectionRef = useRef(null);

  // Function to handle button click
  const handleExploreClick = () => {
    // Hide the button
    setShowButton(false);

    // Unlock scrolling
    setScrollUnlocked(true);

    // Force scroll to the exact position of the next section
    const nextSectionElement = document.getElementById("next-section");
    if (nextSectionElement) {
      const offsetTop = nextSectionElement.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const windowHeight = window.innerHeight;

      setScrollPosition(position);

      // Always update the UI states first, regardless of lock status
      if (position >= windowHeight * 0.4 && !scrollUnlocked) {
        // Lowered threshold to ensure button appears before scroll lock
        // Only show button if user hasn't clicked it yet
        setShowButton(true);
        setHideText(true);
      } else if (position < windowHeight * 0.4) {
        setHideText(false);
        if (!scrollUnlocked) {
          setShowButton(false);
        }
      }

      // If scrolling is locked and trying to scroll past the threshold
      if (!scrollUnlocked && position > windowHeight * 0.5) {
        // Prevent scrolling beyond 50% of first viewport
        window.scrollTo(0, windowHeight * 0.5);
        return;
      }

      lastScrollTopRef.current = position;
    };

    // Prevent default scroll behavior while locked
    const preventDefaultScroll = (e) => {
      if (!scrollUnlocked) {
        const currentScroll = window.scrollY;
        if (currentScroll > window.innerHeight * 0.5) {
          e.preventDefault();
          window.scrollTo(0, windowHeight * 0.5);
          // Ensure button is displayed when hitting scroll limit
          setShowButton(true);
          setHideText(true);
        }
      }
    };

    const windowHeight = window.innerHeight;
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", preventDefaultScroll, { passive: false });
    // Also handle touch events for mobile
    window.addEventListener("touchmove", preventDefaultScroll, {
      passive: false,
    });

    // Call handleScroll once on mount to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", preventDefaultScroll);
      window.removeEventListener("touchmove", preventDefaultScroll);
    };
  }, [scrollUnlocked]);

  // Make sure document is properly sized on mount and resize
  useEffect(() => {
    const handleResize = () => {
      // Ensure sections are properly sized
      const sections = document.querySelectorAll('[class*="h-screen"]');
      sections.forEach((section) => {
        section.style.minHeight = `${window.innerHeight}px`;
      });
    };

    // Run once on mount
    handleResize();

    // Add listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        {/* Background Animations */}
        <Background />
        <Shutter />

        {/* Heading and description */}
        <div
          className={`${styles.textContainer} ${
            hideText ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className={styles.heading}>Welcome to the Shutter Effect</h1>
          <p className={styles.description}>
            Scroll down to see the shutters rotate. This text will change color
            to contrast with its background as the shutters rotate.
          </p>
        </div>

        {/* Button animation */}
        <div
          className={`${styles.buttonContainer} ${
            showButton ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <button className={styles.button} onClick={handleExploreClick}>
            Explore More
          </button>
        </div>

        {/* Scroll down animation */}
        <div
          className={`${styles.scrollIndicator} ${
            hideText ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center">
            <p className={styles.scrollText}>Scroll Down</p>
            <div className={styles.scrollIconContainer}>
              <div className={styles.scrollDot} />
            </div>
          </div>
        </div>
      </div>

      {/* Next Section - Full Screen Height */}
      <div
        id="next-section"
        ref={nextSectionRef}
        className={styles.nextSection}
      >
        Welcome to the Next Section
      </div>
    </div>
  );
};

export default function Home() {
  return <Hero />;
}
