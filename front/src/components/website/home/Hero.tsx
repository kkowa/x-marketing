/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │                 Hero Component                      │
 * │                                                     │
 * │ This component creates an immersive landing hero    │
 * │ section with dynamic animations and scroll-based    │
 * │ interactivity. It features a central content area   │
 * │ with social icons, title text, and CTA button,      │
 * │ plus a scroll indicator that rotates based on       │
 * │ scroll direction.                                   │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */

"use client";
import { useEffect, useState, memo, useRef, useCallback } from "react";
import { throttle } from "lodash";

// Components
import Background from "@/components/animations/Background/Background";
import Shutter from "@/components/animations/Shutter";
import SocialIconGroup from "@/components/website/common/SocialIconsGroup";
import ScrollAnimation from "@/components/animations/ScrollText";
import Title from "@/components/website/common/Title";

// Data
import { heroContent } from "@/data/hero-data";

const Hero = memo(() => {
  const [textVisible, setTextVisible] = useState(true);
  const [scrollRotation, setScrollRotation] = useState(0);
  const lastScrollY = useRef(0);
  const sectionRef = useRef(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState({ top: 0 });

  const handleScroll = useCallback(() => {
    const vh = window.innerHeight;
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY.current) {
      setScrollRotation((prev) => (prev + 1.7) % 360);
    } else if (currentScrollY < lastScrollY.current) {
      setScrollRotation((prev) => (prev - 1.7) % 360);
    }
    lastScrollY.current = currentScrollY;
    setTextVisible(currentScrollY <= vh);
  }, []);

  // Memoized resize handler
  const handleResize = useCallback(() => {
    const sections = document.querySelectorAll('[class*="h-screen"]');
    sections.forEach((section) => {
      (section as HTMLElement).style.minHeight = `${window.innerHeight}px`;
    });

    // Update scroll animation position based on button position - so the title always stays in the middle
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const middleOfScreen = windowHeight / 2;
      const buttonBottomRelativeToMiddle = buttonRect.bottom - middleOfScreen;

      setScrollPosition({
        top: buttonBottomRelativeToMiddle,
      });
    }
  }, []);

  useEffect(() => {
    // Apply rotation as CSS variable for better performance
    document.documentElement.style.setProperty(
      "--scroll-rotation",
      `${scrollRotation}deg`,
    );
  }, [scrollRotation]);

  useEffect(() => {
    handleResize();
    handleScroll();

    // Throttled versions of handlers for better performance
    const throttledScroll = throttle(handleScroll, 16); // ~60fps
    const throttledResize = throttle(handleResize, 100);

    // Set up intersection observer for visibility
    const observer = new IntersectionObserver(
      (entries) => {
        setTextVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Update position after title and button have been rendered
    setTimeout(handleResize, 100);

    // Set up event listeners
    window.addEventListener("resize", throttledResize);
    window.addEventListener("scroll", throttledScroll);

    // Cleanup
    return () => {
      window.removeEventListener("resize", throttledResize);
      window.removeEventListener("scroll", throttledScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      throttledScroll.cancel();
      throttledResize.cancel();
    };
  }, [handleResize, handleScroll]);

  return (
    <>
      <div
        ref={sectionRef}
        className="relative w-full"
        style={{ height: "200vh" }}
      >
        {/* Background elements */}
        <div className="fixed top-0 left-0 z-0 h-screen w-full">
          <Background />
        </div>
        <Shutter />

        {/* Main content container */}
        <div
          className="fixed top-1/2 left-1/2 z-40 mx-auto w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 transform px-8 text-center text-white transition-opacity duration-300 sm:px-8 md:px-16"
          style={{
            opacity: textVisible ? 1 : 0,
            pointerEvents: textVisible ? "auto" : "none",
          }}
        >
          <SocialIconGroup />
          <div ref={buttonRef}>
            <Title
              title={heroContent.title}
              description={heroContent.description}
              button={heroContent.button}
            />
          </div>
        </div>

        {/* Scroll animation container */}
        <div
          className="fixed left-1/2 z-40 -translate-x-1/2 transition-opacity duration-300"
          style={{
            opacity: textVisible ? 1 : 0,
            pointerEvents: textVisible ? "auto" : "none",
            transform: `translateY(calc(50vh + ${scrollPosition.top}px))`,
          }}
        >
          <ScrollAnimation rotation={scrollRotation} />
        </div>
      </div>
    </>
  );
});

Hero.displayName = "Hero";
export default Hero;
