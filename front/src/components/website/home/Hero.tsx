import { useState, useEffect, useRef } from "react";
import Background from "../../animations/Background/Background";
import Shutter from "../../animations/Shutter";
import custom_styles from "../../Hero.module.scss";
import {
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsAppIcon,
  ArrowUpCircleIcon,
} from "public/icons/Icons";
import { GradientButton } from "@/components/ui/buttons/GradientButton";
import homeStyles from "@/styles/home.module.scss"; // Renamed for clarity

const styleBuilder = {
  base: {
    container: "relative w-full",
    heroSection: "relative h-screen w-full z-10",
    nextSection:
      "relative h-screen w-full items-center justify-center bg-[#020103] text-3xl font-bold mt-[600px] z-20 px-6 pt-[calc(10%)] max-w-7xl mx-auto",
    textContainer:
      "absolute top-[calc(50%-80px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 transition-opacity duration-500 z-10",
    scrollText: "mb-2 text-sm font-light text-white",
    scrollIconContainer:
      "w-6 h-10 border-2 border-white rounded-full flex justify-center",
    scrollDot: "w-1 h-3 bg-white rounded-full mt-2 animate-bounce",
    title: "relative text-8xl leading-[1.2] mt-0 pb-[28px]",
    description: "relative text-base text-white leading-[1.5] mt-0",
  },
  // Dynamic style generators
  buttonContainer: (showButton: boolean): string =>
    `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-200 z-10 ${
      showButton ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`,
  scrollIndicator: (hideAnimation: boolean): string =>
    `absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-100 z-10 ${
      hideAnimation ? "opacity-0" : "opacity-100"
    }`,
};

// Function to generate styles based on current state/props
const generateStyles = (showButton: boolean, hideScrollAnimation: boolean) => {
  return {
    // Spread the base styles
    ...styleBuilder.base,
    // Add dynamic styles
    buttonContainer: styleBuilder.buttonContainer(showButton),
    scrollIndicator: styleBuilder.scrollIndicator(hideScrollAnimation),
  };
};

// Constants for scroll thresholds
const SCROLL_ANIMATION_THRESHOLD_FACTOR = 0.35;
const BUTTON_THRESHOLD_FACTOR = 0.65;
const BUTTON_SHOW_DELAY = 2000; // 2 seconds

const Hero = () => {
  // State management
  const [showButton, setShowButton] = useState<boolean>(false);
  const [hideScrollAnimation, setHideScrollAnimation] =
    useState<boolean>(false);
  const [scrollUnlocked, setScrollUnlocked] = useState<boolean>(false);

  // Refs
  const lastScrollTopRef = useRef<number>(0);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const scrollAnimationTimeoutRef = useRef<number | null>(null);
  const prevScrollY = useRef<number>(0);

  // Handle click on explore button
  const handleExploreClick = (): void => {
    setShowButton(false);
    setScrollUnlocked(true);
    scrollToNextSection();
  };

  // Scroll to next section helper
  const scrollToNextSection = (): void => {
    const nextSectionElement = document.getElementById("next-section");
    if (nextSectionElement) {
      const offsetTop = nextSectionElement.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Determine if user is scrolling up
  const isScrollingUp = (currentPosition: number): boolean => {
    const isUp = currentPosition < prevScrollY.current;
    prevScrollY.current = currentPosition;
    return isUp;
  };

  // Handle scroll animation visibility
  const handleScrollAnimationVisibility = (
    position: number,
    threshold: number,
    isUp: boolean
  ): void => {
    if (position >= threshold) {
      if (!hideScrollAnimation && !scrollUnlocked && !isUp) {
        setHideScrollAnimation(true);
        // Clear any existing timeouts
        if (scrollAnimationTimeoutRef.current) {
          clearTimeout(scrollAnimationTimeoutRef.current);
        }
        // Wait before showing the button
        scrollAnimationTimeoutRef.current = window.setTimeout(() => {
          if (window.scrollY >= threshold && !isUp) {
            setShowButton(true);
          }
        }, BUTTON_SHOW_DELAY);
      } else if (!hideScrollAnimation) {
        setHideScrollAnimation(true);
      }
    } else {
      setHideScrollAnimation(false);
      if (!scrollUnlocked) {
        setShowButton(false);
      }
    }
  };

  // Handle button visibility
  const handleButtonVisibility = (
    position: number,
    threshold: number,
    isUp: boolean
  ): void => {
    if (position >= threshold && !scrollUnlocked && !showButton && !isUp) {
      if (hideScrollAnimation) {
        setShowButton(true);
      }
    }
  };

  // Prevent scrolling beyond limit if locked
  const enforceScrollLimit = (position: number, threshold: number): boolean => {
    if (!scrollUnlocked && position > threshold) {
      window.scrollTo(0, threshold);
      return true; // Limit enforced
    }
    return false; // No limit enforced
  };

  // Main scroll handler function
  const handleScroll = (): void => {
    const position = window.scrollY;
    const windowHeight = window.innerHeight;
    // Calculate thresholds based on window height
    const scrollAnimationThreshold =
      windowHeight * SCROLL_ANIMATION_THRESHOLD_FACTOR;
    const buttonThreshold = windowHeight * BUTTON_THRESHOLD_FACTOR;

    // Check scroll direction - must be before any state updates
    const isUp = isScrollingUp(position);

    // IMMEDIATELY hide button on ANY upward scroll - this comes first
    if (isUp && !scrollUnlocked) {
      setShowButton(false);
      // Also clear any pending timeouts
      if (scrollAnimationTimeoutRef.current) {
        clearTimeout(scrollAnimationTimeoutRef.current);
        scrollAnimationTimeoutRef.current = null;
      }
    }

    // Removed setScrollPosition call as the state is no longer used
    // Handle scroll animation visibility
    handleScrollAnimationVisibility(position, scrollAnimationThreshold, isUp);
    // Handle button visibility
    handleButtonVisibility(position, buttonThreshold, isUp);
    // Enforce scroll limit if needed
    const limitEnforced = enforceScrollLimit(position, buttonThreshold);
    if (limitEnforced) {
      return;
    }
    lastScrollTopRef.current = position;
  };

  // Handle wheel and touch events to prevent scrolling when locked
  const preventDefaultScroll = (e: Event): void => {
    if (!scrollUnlocked) {
      const currentScroll = window.scrollY;
      const threshold = window.innerHeight * BUTTON_THRESHOLD_FACTOR;
      if (currentScroll > threshold) {
        e.preventDefault();
        window.scrollTo(0, threshold);
        setShowButton(true);
      }
    }
  };

  // Handle window resize to ensure proper section sizing
  const handleResize = (): void => {
    const sections = document.querySelectorAll('[class*="h-screen"]');
    sections.forEach((section) => {
      // Type assertion to HTMLElement which has style property
      (section as HTMLElement).style.minHeight = `${window.innerHeight}px`;
    });
  };

  // Set up scroll event listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", preventDefaultScroll as EventListener, {
      passive: false,
    });
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

  // Set up resize event listener
  useEffect(() => {
    // Run once on mount
    handleResize();
    // Add listener for window resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Generate dynamic styles based on current state
  const styles = generateStyles(showButton, hideScrollAnimation);

  // Render social icons component
  const renderSocialIcons = () => (
    <div className={custom_styles.social__icons}>
      <InstagramIcon />
      <WhatsAppIcon />
      <LinkedInIcon />
      <TwitterIcon />
    </div>
  );

  // Render hero text content
  const renderHeroText = () => (
    <div className={styles.textContainer}>
      {renderSocialIcons()}
      <h1 className={`${homeStyles.titleColor} ${styles.title}`}>
        Amazing website creation <br />
        with Bantu agency
      </h1>
      <p className={styles.description}>
        help you to build website company that is modern, user friendly, good
        CEO, and Clean design
      </p>
    </div>
  );

  // Render explore button
  const renderExploreButton = () => (
    <div className={styles.buttonContainer}>
      <GradientButton text="Get Started" onClick={handleExploreClick}>
        <ArrowUpCircleIcon />
      </GradientButton>
    </div>
  );

  // Render scroll indicator
  const renderScrollIndicator = () => (
    <div className={styles.scrollIndicator}>
      <div className="flex flex-col items-center">
        <p className={styles.scrollText}>Scroll Down</p>
        <div className={styles.scrollIconContainer}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.heroSection} ref={heroSectionRef}>
        <Background />
        <Shutter />
        {renderHeroText()}
        {renderExploreButton()}
        {renderScrollIndicator()}
      </div>
    </div>
  );
};

export default function Home() {
  return <Hero />;
}
