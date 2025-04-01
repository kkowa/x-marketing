"use client";
import { useEffect } from "react";
import Background from "../../animations/Background/Background";
import Shutter from "../../animations/Shutter";

const Hero = () => {
  // Set minimum height for sections on resize
  useEffect(() => {
    const handleResize = () => {
      const sections = document.querySelectorAll('[class*="h-screen"]');
      sections.forEach((section) => {
        (section as HTMLElement).style.minHeight = `${window.innerHeight}px`;
      });
    };

    // Initial call and event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full" style={{ height: "200vh" }}>
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Background />
      </div>
      <Shutter />
    </div>
  );
};

export default function Home() {
  return <Hero />;
}
