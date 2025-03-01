import styles from "@/styles/Home.module.scss";
import Background from "@/components/animations/Background/Background";
import {
  InstagramIcon,
  WhatsAppIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../../public/icons/icons";
import ShutterOverlay from "@/components/animations/ShutterOverlay/ShutterOverlay";

const NUM_RECTANGLES = 23;
const SCROLL_OFFSET = 50;
const totalHeight = NUM_RECTANGLES * SCROLL_OFFSET;

export default function Home() {
  return (
    <>
      <div
        className={styles.home__container}
        style={{ height: `${totalHeight}px` }}
      >
        <Background />
        <ShutterOverlay />
        <div className="header__container">
          <div className={`${styles["social__icons--wrapper"]}`}>
            <InstagramIcon />
            <WhatsAppIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>
          <h1 className={styles.home__title}>
            Amazing digital presence creation <br /> with X Marketing Agency
          </h1>
          <p className={styles.home__description}>
            Help you to design, build and manage digital presence that is modern
            and user friendly technologies
          </p>
          <button className={styles.home__button}>Know more!</button>
        </div>
      </div>
    </>
  );
}
