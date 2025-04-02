"use client";
import { useEffect, useState, memo } from "react";
import Background from "../../animations/Background/Background";
import Shutter from "../../animations/Shutter";
import { heroContent, socialIcons } from "@/data/hero-data";

const SocialIconGroup = memo(() => (
  <div className="mb-[40px] flex w-full justify-center gap-[16px]">
    {heroContent.socialIcons.map(({ type }) => {
      const Icon = socialIcons[type];
      return (
        <div key={type} className="h-[24px] w-[24px]">
          <Icon />
        </div>
      );
    })}
  </div>
));

const Hero = memo(() => {
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const sections = document.querySelectorAll('[class*="h-screen"]');
      sections.forEach((section) => {
        (section as HTMLElement).style.minHeight = `${window.innerHeight}px`;
      });
    };

    const handleScroll = () => {
      const vh = window.innerHeight;
      setTextVisible(window.scrollY <= vh);
    };

    handleResize();
    handleScroll();

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
        <div className="fixed top-0 left-0 z-0 h-screen w-full">
          <Background />
        </div>
        <Shutter />
        <div
          className="fixed top-1/2 left-1/2 z-40 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 transform text-center text-white transition-opacity duration-300"
          style={{
            opacity: textVisible ? 1 : 0,
            pointerEvents: textVisible ? "auto" : "none",
          }}
        >
          <SocialIconGroup />
          <h1 className="title-color z-50 mb-4 text-[105px] font-bold">
            {heroContent.title}
          </h1>
          <p className="text-base">{heroContent.description}</p>
        </div>
      </div>
    </>
  );
});

Hero.displayName = "Hero";
SocialIconGroup.displayName = "SocialIconGroup";

export default function Home() {
  return <Hero />;
}
