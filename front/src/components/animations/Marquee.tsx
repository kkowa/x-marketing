// TODO: NEED TO FIX ERROR/GLICH

"use client";
import { useEffect, useRef } from "react";
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
  images?: (string | ImageObject)[];
  showText?: boolean;
  imageSize?: number;
  direction?: "left" | "right";
};

export default function Marquee({
  text = "",
  speed = 20, // Default speed (lower number = faster)
  backgroundColor = "#000000",
  textColor = "#ffffff",
  fontSize = "24px",
  height = "60px",
  gap = "20px",
  images = [],
  showText = true,
  imageSize = 40,
  direction = "left",
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Animation speed and direction
  const animationDuration = `${speed}s`;
  const animationDirection = direction === "right" ? "reverse" : "normal";

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.animationDuration = animationDuration;
      trackRef.current.style.animationDirection = animationDirection;
    }
  }, [speed, animationDuration, animationDirection]);

  // Function to duplicate images as needed to fill the container
  const renderImageItems = () => {
    if (!images || images.length === 0) {
      return null;
    }

    // Making sure we have enough images for a visually infinite loop
    // We repeat the entire set of images multiple times to ensure coverage
    const duplicatedImages = [...images, ...images, ...images, ...images];

    return duplicatedImages.map((image, index) => (
      <div
        key={`img-${index}`}
        className={styles.item}
        style={{ margin: `0 ${gap}` }}
      >
        {typeof image === "string" ? (
          <Image
            src={image}
            alt={`Image ${index % images.length}`}
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
            alt={image.alt || `Image ${index % images.length}`}
            width={image.width || imageSize}
            height={image.height || imageSize}
            style={{ objectFit: "contain" }}
          />
        )}
        {showText && text && <span style={{ marginLeft: "10px" }}>{text}</span>}
      </div>
    ));
  };

  return (
    <div
      ref={containerRef}
      className={styles.marqueeWrapper}
      style={{
        backgroundColor,
        color: textColor,
        fontSize,
        height,
      }}
    >
      <div ref={trackRef} className={styles.track}>
        {renderImageItems()}
      </div>
    </div>
  );
}
