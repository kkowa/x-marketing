import styles from "@/styles/Home.module.scss";
import Background from "@/components/animations/Background/Background";
import {
  InstagramIcon,
  WhatsAppIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../../public/icons/icons";
import ShutterOverlay from "@/components/animations/ShutterOverlay/ShutterOverlay";

const NUM_RECTANGLES = 23; // Number of shutters
const SCROLL_OFFSET = 100; // Scroll offset for each shutter
const totalHeight = NUM_RECTANGLES * SCROLL_OFFSET; // Total height required

export default function Home() {
  return (
    <>
      <Background />
      <ShutterOverlay />
      <div
        className={styles.content__container}
        style={{ height: `${totalHeight}px` }} // Set the height dynamically
      >
        <div className={`${styles["social__icons--wrapper"]}`}>
          <InstagramIcon />
          <WhatsAppIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </div>
        <h1 className={styles.title}>
          Amazing digital presence creation <br /> with X Marketing Agency
        </h1>
        <p className={styles.description}>
          Help you to design, build and manage digital presence that is modern
          and user friendly technologies
        </p>
      </div>
    </>
  );
}
