"use client";
import { useState, useEffect } from "react";

const Shutter = () => {
  const [rotation, setRotation] = useState(0);
  const numberOfShutters = 23;

  useEffect(() => {
    // Simple scroll handler with direct mapping
    const handleScroll = () => {
      // Get viewport height
      const vh = window.innerHeight;

      // Get current scroll position
      const scrollY = window.scrollY;

      // Calculate rotation (0-180 degrees) based on scroll position
      // Complete rotation at 80% of the total height to ensure all shutters turn
      const maxRotation = 210;
      const newRotation = Math.min(
        (scrollY / (vh * 1.6)) * maxRotation,
        maxRotation
      );

      // Update state
      setRotation(newRotation);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial call
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen overflow-hidden"
      style={{ zIndex: 5, perspective: "1000px" }}
    >
      {/* Container for shutters */}
      <div className="flex h-full w-full">
        {/* Create shutters */}
        {[...Array(numberOfShutters)].map((_, index) => {
          // Smaller delay for faster turn of all shutters
          const delayFactor = 1.0;

          // Calculate individual rotation with sequential delay
          const individualRotation = Math.max(
            0,
            rotation - index * delayFactor
          );

          // Cap the rotation at 180 degrees
          const cappedRotation = Math.min(individualRotation, 180);

          return (
            <div
              key={index}
              className="relative h-full"
              style={{
                width: `${100 / numberOfShutters}%`,
                transformStyle: "preserve-3d",
                transform: `rotateY(${cappedRotation}deg)`,
                transition: "transform 0.05s linear",
              }}
            >
              {/* Front face - visible initially */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
                  backfaceVisibility: "hidden",
                }}
              />

              {/* Back face - visible after rotation */}
              <div
                className="absolute inset-0 bg-[#020103]"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Black gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 95%)",
          zIndex: 40,
        }}
      />
    </div>
  );
};

export default Shutter;
