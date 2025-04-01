"use client";
import { useEffect, useState } from "react";
import Background from "../../animations/Background/Background";
import Shutter from "../../animations/Shutter";
import {
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "public/icons/Icons";

const Hero = () => {
  // Track visibility of text based on scroll position
  const [textVisible, setTextVisible] = useState(true);

  // Set minimum height for sections on resize
  useEffect(() => {
    const handleResize = () => {
      const sections = document.querySelectorAll('[class*="h-screen"]');
      sections.forEach((section) => {
        (section as HTMLElement).style.minHeight = `${window.innerHeight}px`;
      });
    };

    // Handle scroll to show/hide text based on position within Hero
    const handleScroll = () => {
      // Get viewport height
      const vh = window.innerHeight;

      // If scrolled past the first viewport height, hide the text
      if (window.scrollY > vh) {
        setTextVisible(false);
      } else {
        setTextVisible(true);
      }
    };

    // Initial calls
    handleResize();
    handleScroll();

    // Event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative w-full" style={{ height: "200vh" }}>
        <div className="fixed top-0 left-0 w-full h-screen z-0">
          <Background />
        </div>
        <Shutter />

        {/* Text overlay that disappears when scrolling past Hero */}
        <div
          className="fixed w-full max-w-7xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center transition-opacity duration-300 z-40"
          style={{
            opacity: textVisible ? 1 : 0,
            pointerEvents: textVisible ? "auto" : "none",
          }}
        >
          <div className="w-full flex justify-center gap-[16px] mb-[40px]">
            <div className="w-[24px] h-[24px]">
              <InstagramIcon />
            </div>
            <div className="w-[24px] h-[24px]">
              <WhatsAppIcon />
            </div>
            <div className="w-[24px] h-[24px]">
              <LinkedInIcon />
            </div>
            <div className="w-[24px] h-[24px]">
              <TwitterIcon />
            </div>
          </div>
          <h1 className="title-color text-[105px] font-bold mb-4 z-50">
            Amazing website creation with Bantu agency
          </h1>
          <p className="text-base">
            help you to build website company that is modern, user friendly,
            good CEO, and Clean design
          </p>
        </div>
      </div>
    </>
  );
};

export default function Home() {
  return <Hero />;
}
