import { useState, useEffect, useRef } from "react";

const Shutter = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const shutterContainerRef = useRef<HTMLDivElement>(null);
  const numberOfShutters = 23;

  useEffect(() => {
    const handleScroll = () => {
      if (!shutterContainerRef.current) return;
      // Get the container's position and dimensions
      const containerRect = shutterContainerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      // Calculate scroll progress through the container (0 to 1)
      const scrolledPastTop = -containerTop;
      const progress = Math.min(
        Math.max(scrolledPastTop / containerHeight, 0),
        1
      );
      // Scale to a value that works well for the rotation effect
      const scaledPosition = progress * 2000;
      setScrollPosition(scaledPosition);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Shutter effect container with 250vh height - fixed due to shutter overlayer effect*/}
      <div
        ref={shutterContainerRef}
        className="relative w-full"
        style={{ height: "200vh" }}
      >
        <div
          className="sticky top-0 h-screen w-full overflow-hidden"
          style={{
            perspective: "1000px",
          }}
        >
          {/* Container for shutters */}
          <div className="flex h-full w-full relative">
            {/* Black gradient overlay that sits on top of all shutters */}
            <div
              className="absolute inset-0 z-40 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 95%)",
              }}
            />

            {/* Shutters */}
            {[...Array(numberOfShutters)].map((_, index) => {
              const rotation = Math.min(
                (scrollPosition / 8) * (index * 0.15 + 1),
                180
              );
              return (
                <div
                  key={index}
                  className="relative h-full"
                  style={{
                    width: `${100 / numberOfShutters}%`,
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${rotation}deg)`,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  {/* Front face - white gradient from left (0%) to right (100%) */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 100%)",
                      backfaceVisibility: "hidden",
                      zIndex: 10,
                    }}
                  />
                  {/* Back face - white side (higher z-index than text)  white is just used for debbuging*/}
                  <div
                    className="absolute inset-0 bg-[#020103]"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      zIndex: 30,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shutter;
