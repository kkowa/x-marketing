"use client";
import { useState } from "react";
import styles from "@/styles/home.module.scss";
import Background from "@/components/animations/Background/Background";
import {
  InstagramIcon,
  WhatsAppIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../../public/icons/icons";
import ShutterOverlay from "@/components/animations/ShutterOverlay/ShutterOverlay";

const NUM_RECTANGLES = 23; // Number of shutters
const SCROLL_OFFSET = 50; // Reduced from 100 to make shutters turn faster
const totalHeight = NUM_RECTANGLES * SCROLL_OFFSET; // Total height required

export default function Home() {
  const [isShutterClosed, setIsShutterClosed] = useState(false);

  return (
    <>
      <section
        id="landing"
        className={styles.home__container}
        style={{ height: `${totalHeight}px` }}
      >
        <Background />
        <ShutterOverlay
          onClose={(closed: boolean | ((prevState: boolean) => boolean)) =>
            setIsShutterClosed(closed)
          }
        />
        <div
          className={styles.header__container}
          style={{ zIndex: isShutterClosed ? 40 : 50 }} // Adjust z-index dynamically
        >
          <div className={`${styles["social__icons--wrapper"]}`}>
            <InstagramIcon />
            <WhatsAppIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>
          <h1 className={styles.home__title}>
            Amazing website creation <br /> with X Agency
          </h1>
          <p className={styles.home__description}>
            help you to build website company that is modern, user friendly,
            good CEO, and Clean design
          </p>
        </div>
      </section>
      <section id="more">
        hello
        <h1>HEY</h1>
      </section>
    </>
  );
}
