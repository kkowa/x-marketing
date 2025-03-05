import { useState, useEffect, useRef } from "react";
import Background from "./animations/Background/Background";
import Shutter from "./animations/Shutter";

import custom_styles from "./Hero.module.scss";
import {
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "public/icons/icons";
// Styles for the component
const styles = {
  container: "relative w-full",
  heroSection: "relative h-screen w-full z-10",
  nextSection:
    "relative h-screen w-full items-center justify-center bg-[#020103] text-white text-3xl font-bold mt-[600px] z-20 px-[120px] pt-[calc(10%)]",
  textContainer:
    "absolute top-[calc(50%-80px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 transition-opacity duration-500 z-10",
  heading: "text-white text-5xl font-bold mb-6 drop-shadow-lg",
  description: "text-white max-w-2xl mx-auto drop-shadow-md",
  buttonContainer:
    "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-500 z-10",
  button:
    "bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-purple-100 transition-colors duration-300",
  scrollIndicator:
    "absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 z-10",
  scrollText: "mb-2 text-sm font-light text-white",
  scrollIconContainer:
    "w-6 h-10 border-2 border-white rounded-full flex justify-center",
  scrollDot: "w-1 h-3 bg-white rounded-full mt-2 animate-bounce",
};

const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [hideScrollAnimation, setHideScrollAnimation] = useState(false);
  const [scrollUnlocked, setScrollUnlocked] = useState(false);
  const lastScrollTopRef = useRef(0);
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const scrollAnimationTimeoutRef = useRef<number | null>(null);

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

  // Track scroll direction for immediate button hiding
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const windowHeight = window.innerHeight;

      // Detect scroll direction - must be before any state updates
      const isScrollingUp = position < prevScrollY.current;
      prevScrollY.current = position;

      // IMMEDIATELY hide button on ANY upward scroll - this comes first
      if (isScrollingUp && !scrollUnlocked) {
        setShowButton(false);
        // Also clear any pending timeouts
        if (scrollAnimationTimeoutRef.current) {
          clearTimeout(scrollAnimationTimeoutRef.current);
          scrollAnimationTimeoutRef.current = null;
        }
      }

      setScrollPosition(position);

      // Set thresholds - MODIFIED THESE VALUES TO REQUIRE MORE SCROLLING
      const scrollAnimationThreshold = windowHeight * 0.35; // Increased from 0.25
      const buttonThreshold = windowHeight * 0.65; // Increased from 0.4

      // Handle scroll animation visibility
      if (position >= scrollAnimationThreshold) {
        // If scroll animation is still visible, hide it first and start the 2s delay for button
        if (!hideScrollAnimation && !scrollUnlocked && !isScrollingUp) {
          setHideScrollAnimation(true);

          // Clear any existing timeouts
          if (scrollAnimationTimeoutRef.current) {
            clearTimeout(scrollAnimationTimeoutRef.current);
          }

          // Wait 2 seconds before showing the button
          scrollAnimationTimeoutRef.current = window.setTimeout(() => {
            // Check if we're still scrolled past threshold
            if (window.scrollY >= scrollAnimationThreshold && !isScrollingUp) {
              setShowButton(true);
            }
          }, 2000); // Changed to 2s delay as requested
        } else if (!hideScrollAnimation) {
          // Just hide scroll animation with no button (when unlocked)
          setHideScrollAnimation(true);
        }
      } else {
        // Below threshold - show scroll animation, hide button
        setHideScrollAnimation(false);
        if (!scrollUnlocked) {
          setShowButton(false);
        }
      }

      // Show button immediately if past threshold and scrolling down
      if (
        position >= buttonThreshold &&
        !scrollUnlocked &&
        !showButton &&
        !isScrollingUp
      ) {
        // Only show button if scroll animation is already hidden
        if (hideScrollAnimation) {
          setShowButton(true);
        }
      }

      // Prevent scrolling beyond limit if locked - MODIFIED TO MATCH NEW THRESHOLD
      if (!scrollUnlocked && position > windowHeight * 0.65) {
        window.scrollTo(0, windowHeight * 0.65);
        return;
      }

      lastScrollTopRef.current = position;
    };

    const windowHeight = window.innerHeight;

    // Prevent default scroll behavior while locked
    const preventDefaultScroll = (e: WheelEvent | TouchEvent) => {
      if (!scrollUnlocked) {
        const currentScroll = window.scrollY;
        // MODIFIED THIS THRESHOLD TO MATCH ABOVE
        if (currentScroll > windowHeight * 0.65) {
          e.preventDefault();
          window.scrollTo(0, windowHeight * 0.65);
          // Ensure button is displayed when hitting scroll limit
          setShowButton(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", preventDefaultScroll as EventListener, {
      passive: false,
    });
    // Also handle touch events for mobile
    window.addEventListener(
      "touchmove",
      preventDefaultScroll as EventListener,
      {
        passive: false,
      }
    );

    // Call handleScroll once on mount to set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(
        "wheel",
        preventDefaultScroll as EventListener
      );
      window.removeEventListener(
        "touchmove",
        preventDefaultScroll as EventListener
      );
      // Clear timeout on unmount
      if (scrollAnimationTimeoutRef.current) {
        clearTimeout(scrollAnimationTimeoutRef.current);
      }
    };
  }, [scrollUnlocked, showButton]);

  // Make sure document is properly sized on mount and resize
  useEffect(() => {
    const handleResize = () => {
      // Ensure sections are properly sized
      const sections = document.querySelectorAll('[class*="h-screen"]');
      sections.forEach((section) => {
        // Type casting the section to HTMLElement
        (section as HTMLElement).style.minHeight = `${window.innerHeight}px`;
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

  // Style for button container with faster transition
  const buttonContainerStyle = `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-200 z-10 ${
    showButton ? "opacity-100 scale-100" : "opacity-0 scale-95"
  }`;

  // Animation transition styles with faster timing for scroll indicator
  const scrollIndicatorStyle = `absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-100 z-10 ${
    hideScrollAnimation ? "opacity-0" : "opacity-100"
  }`;

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection} ref={heroSectionRef}>
        {/* Background Animations */}
        <Background />
        <Shutter />

        {/* Heading and description - now absolutely positioned within the hero section */}
        <div className={styles.textContainer}>
          <div className={custom_styles.social__icons}>
            <InstagramIcon />
            <WhatsAppIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>
          <h1 className={custom_styles.home__title}>
            Amazing website creation <br />
            with Bantu agency
          </h1>
          <p className={custom_styles.home__description}>
            help you to build website company that is modern, user friendly,
            good CEO, and Clean design
          </p>
        </div>

        {/* Button animation - with faster transition */}
        <div className={buttonContainerStyle}>
          <button
            className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium  rounded-[60px] group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 duration-300"
            onClick={handleExploreClick}
          >
            <span className="relative px-4 py-0.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-[60px] group-hover:bg-transparent group-hover:dark:bg-transparent">
              <div className="flex w-[141px] h-[35px] justify-center items-center">
                <p className="mr-[10px] text-white">Get Started</p>
              </div>
            </span>
          </button>
        </div>
        {/* Scroll down animation - with instant transition */}
        <div className={scrollIndicatorStyle}>
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
        <div
          style={{ display: "flex", flexDirection: "column", color: "black" }}
        >
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <div
              className={custom_styles.home__title}
              style={{
                fontSize: "68px",
                lineHeight: "1.15",
                paddingBottom: "0px",
              }}
            >
              Companies that can help you in
            </div>
            <button
              className="bg-white text-black font-medium rounded-full text-sm px-5 py-2.5 text-center focus:outline-none"
              style={{
                marginLeft: "15px",
                width: "218px",
                height: "36px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                position: "relative",
                zIndex: "1",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  color: "black",
                  fontWeight: "medium",
                }}
              >
                Know More
              </span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "rotate(45deg)" }}
              >
                <path
                  d="M8.28837 7.01682L8.28837 1.12426C8.28598 1.01458 8.26195 0.906442 8.21766 0.806064C8.13314 0.603667 7.97222 0.442755 7.76983 0.35823C7.66945 0.313943 7.56131 0.289914 7.45163 0.287519L1.55907 0.287519C1.44919 0.287519 1.34038 0.309162 1.23886 0.351213C1.13735 0.393263 1.0451 0.454897 0.967404 0.532596C0.810484 0.689516 0.722328 0.902345 0.722328 1.12426C0.722328 1.34618 0.810485 1.55901 0.967404 1.71593C1.12432 1.87285 1.33715 1.96101 1.55907 1.96101L5.44227 1.95511L0.38056 7.01682C0.22428 7.1731 0.136482 7.38506 0.136482 7.60608C0.136482 7.82709 0.22428 8.03905 0.38056 8.19533C0.53684 8.35161 0.748801 8.43941 0.969815 8.43941C1.19083 8.43941 1.40279 8.35161 1.55907 8.19533L6.62078 3.13362L6.61488 7.01682C6.61443 7.12683 6.63577 7.23584 6.67766 7.33756C6.71955 7.43928 6.78117 7.5317 6.85895 7.60949C6.93674 7.68728 7.02917 7.7489 7.13089 7.79079C7.23261 7.83268 7.34162 7.85401 7.45163 7.85356C7.56164 7.85401 7.67065 7.83268 7.77237 7.79079C7.87409 7.7489 7.96651 7.68728 8.0443 7.60949C8.12209 7.5317 8.18371 7.43928 8.2256 7.33756C8.26749 7.23584 8.28882 7.12683 8.28837 7.01682Z"
                  fill="#16121E"
                />
              </svg>
            </button>
          </div>
          <div
            className={custom_styles.home__title}
            style={{
              fontSize: "68px",
              lineHeight: "1.15",
              marginTop: "0",
              paddingBottom: "40px",
            }}
          >
            developing your company for the future
          </div>
          <div className={custom_styles.home__description}>
            Work in the IT field includes Web Design, UI/UX Design, Branding{" "}
            <br /> and Shopify Development
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return <Hero />;
}
