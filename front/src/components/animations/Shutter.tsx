import { useState, useEffect, useRef } from "react";
// import Background from "./Background/Background";

const Shutter = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [firstShutterRotating, setFirstShutterRotating] = useState(false);
  // const [textColor, setTextColor] = useState("text-black");
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

      // Check if the first shutter has started rotating
      // We use the first shutter (index 0) to determine when to hide the text
      // const firstShutterRotation = Math.min(
      //   (scaledPosition / 8) * (0 * 0.15 + 1),
      //   180
      // );

      // Consider first shutter rotating when it's past a small threshold (e.g., 5 degrees)
      // const isRotating = firstShutterRotation > 5;
      // setFirstShutterRotating(isRotating);

      // Change text color based on rotation progress
      // As the shutters rotate to reveal black background, we switch to white text
      // if (firstShutterRotation > 45) {
      //   setTextColor("text-white");
      // } else {
      //   setTextColor("text-black");
      // }
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
          {/* Heading and description - z-index changes based on first shutter rotation */}
          {/* <div
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 transition-all duration-300`}
            // className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 transition-all duration-300 ${textColor}`}
            style={{
              zIndex: firstShutterRotating ? 10 : 20, // Above gray (15) when not rotating, below both when rotating
              opacity: 1,
              transition: "color 0.5s ease-in-out",
            }}
          >
            <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
              Welcome to the Shutter Effect
            </h1>
            <p className="text-xl max-w-2xl mx-auto drop-shadow-md">
              Scroll down to see the shutters rotate. This text will change
              color to contrast with its background as the shutters rotate.
            </p>
          </div> */}

          {/* Custom grid for 23 columns */}
          <div className="flex h-full w-full">
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
                        "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
                      backfaceVisibility: "hidden",
                      zIndex: 10, // Lower than text (20)
                    }}
                  />

                  {/* Back face - black side (higher z-index than text) */}
                  <div
                    className="absolute inset-0 bg-black"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      zIndex: 30, // Higher than text (20) - always on top when visible
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Instructions overlay - positioned below the header but above everything else */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg z-40">
            Scroll to rotate shutters
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shutter;
