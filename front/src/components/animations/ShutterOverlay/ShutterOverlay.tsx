"use client";
import { useState, useEffect } from "react";
import styles from "./ShutterOverlay.module.scss";

const NUM_RECTANGLES = 23;
const SCROLL_OFFSET = 50;
const shutterCloseThreshold = SCROLL_OFFSET * (NUM_RECTANGLES - 1) + 90;

interface ShutterOverlayProps {
  onClose: (isClosed: boolean) => void;
}

const ShutterOverlay = ({ onClose }: ShutterOverlayProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isFullyClosed, setIsFullyClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollY >= shutterCloseThreshold) {
      setIsFullyClosed(true);
      onClose(true);
    } else {
      setIsFullyClosed(false);
      onClose(false);
    }
  }, [scrollY, onClose]);

  const getRotationDegrees = (index: number) => {
    const progress = scrollY - index * SCROLL_OFFSET;
    const rotation = progress > 0 ? (progress / 45) * 180 : 0;
    return Math.min(Math.max(rotation, 0), 180);
  };

  return (
    <div className={styles.shutterOverlay}>
      <div
        className={`${styles.shutterContainer} ${
          isFullyClosed ? styles.fullyClosed : ""
        }`}
      >
        <div className={styles.shutterRow}>
          {Array.from({ length: NUM_RECTANGLES }).map((_, index) => {
            const rotation = getRotationDegrees(index);
            return (
              <div key={index} className={styles.shutterPanel}>
                <div
                  className={styles.shutterInner}
                  style={{
                    transform: `perspective(800px) rotateY(${rotation}deg)`,
                  }}
                >
                  <div className={styles.frontFace} />
                  <div className={styles.backFace} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${styles.contentReveal} ${
          isFullyClosed ? styles.fullyClosed : styles.hidden
        }`}
      >
        <p>
          Companies that can help you in <br />
          developing your company for the future
        </p>
      </div>
    </div>
  );
};

export default ShutterOverlay;
