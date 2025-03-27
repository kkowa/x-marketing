"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/home.module.scss";

// Define types for props and images
type ImageObject = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type MarqueeProps = {
  text?: string;
  speed?: number;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: string;
  height?: string;
  gap?: string;
  repeat?: number;
  images?: (string | ImageObject)[];
  showText?: boolean;
  imageSize?: number;
  direction?: "left" | "right";
};

// Create a separate MarqueeContent component to avoid code duplication
const MarqueeContent = ({
  images,
  showText,
  text,
  imageSize,
  gap,
}: {
  images: (string | ImageObject)[];
  showText: boolean;
  text: string;
  imageSize: number;
  gap: string;
}) => {
  return (
    <>
      {images && images.length > 0 && (
        <div
          className={styles.imageContainer}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          {images.map((image, imgIndex) => (
            <div key={imgIndex} style={{ marginRight: "10px" }}>
              {typeof image === "string" ? (
                <Image
                  src={image}
                  alt={`Marquee image ${imgIndex}`}
                  width={imageSize}
                  height={imageSize}
                  style={{
                    height: `${imageSize}px`,
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <Image
                  src={image.src}
                  alt={image.alt || `Marquee image ${imgIndex}`}
                  width={image.width || imageSize}
                  height={image.height || imageSize}
                  style={{ objectFit: "contain" }}
                />
              )}
            </div>
          ))}
        </div>
      )}
      {showText && <span>{text}</span>}
    </>
  );
};

export default function Marquee({
  text = "",
  speed = 20, // Default faster speed (lower number = faster)
  backgroundColor = "#000000",
  textColor = "#ffffff",
  fontSize = "24px",
  height = "60px",
  gap = "20px", // Reduced gap for more items
  repeat = 25, // Increased default repeat for more items
  images = [],
  showText = true,
  imageSize = 40,
  direction = "left",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsNeeded, setItemsNeeded] = useState(repeat);

  // Calculate how many items we need to fill the screen based on container width
  useEffect(() => {
    if (containerRef.current) {
      const updateWidth = () => {
        const width = containerRef.current?.offsetWidth || 0;

        // Estimate how many items needed to fill screen twice (for seamless loop)
        // This is an estimation based on average item width + gap
        const avgItemWidth = images.length > 0 ? imageSize * 1.5 : 200; // Rough estimate
        const itemGap = parseInt(gap) || 20;
        const estimatedItemsNeeded =
          Math.ceil((width * 2) / (avgItemWidth + itemGap)) + 5; // Add buffer

        setItemsNeeded(Math.max(estimatedItemsNeeded, repeat));
      };

      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, [gap, imageSize, repeat, images.length]);

  // Use speed to adjust animation duration in the CSS
  const animationDuration = `${speed}s`;
  const animationDirection = direction === "right" ? "reverse" : "normal";

  useEffect(() => {
    if (containerRef.current) {
      // Add animation styles dynamically based on speed
      const innerElement = containerRef.current.querySelector(
        `.${styles.marqueeInner}`
      ) as HTMLElement;

      if (innerElement) {
        innerElement.style.animationDuration = animationDuration;
        innerElement.style.animationDirection = animationDirection;
      }
    }
  }, [speed, animationDuration, animationDirection]);

  // Create array with repeated content based on calculated items needed
  const contentArray = Array(itemsNeeded).fill(null);

  return (
    <div
      ref={containerRef}
      className={styles.marqueeContainer}
      style={{
        backgroundColor,
        color: textColor,
        fontSize,
        height,
        overflow: "hidden",
      }}
    >
      {/* Only one marquee strip */}
      <div
        className={styles.marqueeInner}
        style={{
          animationDuration,
          animationDirection,
        }}
      >
        {contentArray.map((_, index) => (
          <div
            key={`item-${index}`}
            className={styles.marqueeItem}
            style={{
              marginRight: gap,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <MarqueeContent
              images={images}
              showText={showText}
              text={text}
              imageSize={imageSize}
              gap={gap}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
