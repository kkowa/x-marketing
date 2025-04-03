/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │               ScrollAnimation Component             │
 * │                                                     │
 * │ This component renders a rotating scroll text       │
 * │ indicator with a stationary mouse icon positioned   │
 * │ in the center. It accepts a rotation value as a     │
 * │ prop to control the angle of the scroll text,       │
 * │ typically updated by scroll events in the parent.   │
 * │                                                     │
 * │ Features:                                           │
 * │ - Rotating text with CSS transform                  │
 * │ - Fixed mouse pointer centered using absolute       │
 * │   positioning and transform                         │
 * │ - Smooth animations with CSS transitions            │
 * │ - Performance optimization with React.memo          │
 * │ - TypeScript interface for proper prop typing       │
 * │ - Optimized rendering with custom memoization       │
 * │ - Hardware acceleration hints with will-change      │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */

import { memo, useEffect } from "react";
import Image from "next/image";
import Mouse from "public/img/hero/mouse.svg";
import ScrollText from "public/img/hero/scroll-text.svg";

interface ScrollAnimationProps {
  rotation: number;
}

const ScrollAnimation = memo(
  ({ rotation }: ScrollAnimationProps) => {
    // Preload images to avoid flickering - using a safer method
    useEffect(() => {
      // Using the Image API directly can cause TypeScript errors
      // This method is safer and accomplishes the same goal
      const preloadImage = (src: string) => {
        const img = document.createElement("img");
        img.src = src;
      };

      preloadImage(Mouse.src);
      preloadImage(ScrollText.src);
    }, []);

    return (
      <div className="relative h-30 w-30 sm:h-35 sm:w-35 lg:h-41 lg:w-41">
        <div
          className="transition-transform duration-50 ease-linear"
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "center center",
            willChange: "transform",
          }}
        >
          <Image
            src={ScrollText}
            alt="Scroll down"
            className="h-auto w-full"
            priority
          />
        </div>
        <Image
          src={Mouse}
          alt="Mouse indicator"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          priority
        />
      </div>
    );
  },
  // Custom comparison for memoization to prevent unnecessary re-renders
  (prevProps, nextProps) => {
    // Only re-render when rotation changes by a meaningful amount
    return Math.abs(prevProps.rotation - nextProps.rotation) < 0.1;
  },
);

ScrollAnimation.displayName = "ScrollAnimation";

export default ScrollAnimation;
