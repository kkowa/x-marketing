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
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 transition-opacity duration-500 z-10",
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

      // Set thresholds
      const scrollAnimationThreshold = windowHeight * 0.25;
      const buttonThreshold = windowHeight * 0.4;

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

      // Prevent scrolling beyond limit if locked
      if (!scrollUnlocked && position > windowHeight * 0.5) {
        window.scrollTo(0, windowHeight * 0.5);
        return;
      }

      lastScrollTopRef.current = position;
    };

    const windowHeight = window.innerHeight;

    // Prevent default scroll behavior while locked
    const preventDefaultScroll = (e: WheelEvent | TouchEvent) => {
      if (!scrollUnlocked) {
        const currentScroll = window.scrollY;
        if (currentScroll > windowHeight * 0.5) {
          e.preventDefault();
          window.scrollTo(0, windowHeight * 0.5);
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
          <h1 className={styles.heading}>Welcome to the Shutter Effect</h1>
          <p className={styles.description}>
            Scroll down to see the shutters rotate. This text will change color
            to contrast with its background as the shutters rotate.
          </p>
        </div>

        {/* Button animation - with faster transition */}
        <div className={buttonContainerStyle}>
          <button className={styles.button} onClick={handleExploreClick}>
            Explore More
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
        Welcome to the Next Section
      </div>
    </div>
  );
};

export default function Home() {
  return <Hero />;
}
