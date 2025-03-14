import { useRef } from "react";

import custom_styles from "../../Hero.module.scss";

const styles = {
  nextSection:
    "relative h-screen w-full items-center justify-center bg-[#020103] text-white text-3xl font-bold mt-[600px] z-200 px-6 pt-[calc(10%)] max-w-7xl mx-auto ",
};

const About = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div id="next-section" ref={nextSectionRef} className={styles.nextSection}>
      <div style={{ display: "flex", flexDirection: "column", color: "black" }}>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div
            className={custom_styles.home__title}
            style={{
              fontSize: "68px",
              lineHeight: "1.15",
              paddingBottom: "0px",
            }}
          >
            Companies that can help you in
          </div>
          <button
            className="bg-white text-black font-medium rounded-full text-sm px-5 py-2.5 text-center focus:outline-none"
            style={{
              marginLeft: "15px",
              width: "218px",
              height: "36px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              position: "relative",
              zIndex: "1",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                color: "black",
                fontWeight: "medium",
              }}
            >
              Know More
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "rotate(45deg)" }}
            >
              <path
                d="M8.28837 7.01682L8.28837 1.12426C8.28598 1.01458 8.26195 0.906442 8.21766 0.806064C8.13314 0.603667 7.97222 0.442755 7.76983 0.35823C7.66945 0.313943 7.56131 0.289914 7.45163 0.287519L1.55907 0.287519C1.44919 0.287519 1.34038 0.309162 1.23886 0.351213C1.13735 0.393263 1.0451 0.454897 0.967404 0.532596C0.810484 0.689516 0.722328 0.902345 0.722328 1.12426C0.722328 1.34618 0.810485 1.55901 0.967404 1.71593C1.12432 1.87285 1.33715 1.96101 1.55907 1.96101L5.44227 1.95511L0.38056 7.01682C0.22428 7.1731 0.136482 7.38506 0.136482 7.60608C0.136482 7.82709 0.22428 8.03905 0.38056 8.19533C0.53684 8.35161 0.748801 8.43941 0.969815 8.43941C1.19083 8.43941 1.40279 8.35161 1.55907 8.19533L6.62078 3.13362L6.61488 7.01682C6.61443 7.12683 6.63577 7.23584 6.67766 7.33756C6.71955 7.43928 6.78117 7.5317 6.85895 7.60949C6.93674 7.68728 7.02917 7.7489 7.13089 7.79079C7.23261 7.83268 7.34162 7.85401 7.45163 7.85356C7.56164 7.85401 7.67065 7.83268 7.77237 7.79079C7.87409 7.7489 7.96651 7.68728 8.0443 7.60949C8.12209 7.5317 8.18371 7.43928 8.2256 7.33756C8.26749 7.23584 8.28882 7.12683 8.28837 7.01682Z"
                fill="#16121E"
              />
            </svg>
          </button>
        </div>
        <div
          className={custom_styles.home__title}
          style={{
            fontSize: "68px",
            lineHeight: "1.15",
            marginTop: "0",
            paddingBottom: "40px",
          }}
        >
          developing your company for the future
        </div>
        <div className={custom_styles.home__description}>
          Work in the IT field includes Web Design, UI/UX Design, Branding{" "}
          <br /> and Shopify Development
        </div>
      </div>
      {/* second heading  */}
      <div
        style={{
          display: "flex",
          color: "black",
          paddingTop: "250px",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <div
              className={custom_styles.home__title}
              style={{
                fontSize: "68px",
                lineHeight: "1.15",
                paddingBottom: "40px",
              }}
            >
              Let’s work together <br /> with our us
            </div>
          </div>
          <div className={custom_styles.home__description}>
            help you to build website company that is modern, user friendly,
            <br />
            good CEO, and Clean design
          </div>
        </div>

        <div>
          <button
            className="bg-white text-black font-medium rounded-full text-sm px-5 py-2.5 text-center focus:outline-none"
            style={{
              marginLeft: "15px",
              width: "161px",
              height: "36px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              position: "relative",
              zIndex: "1",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                color: "black",
                fontWeight: "medium",
              }}
            >
              Get Started
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "rotate(45deg)" }}
            >
              <path
                d="M8.28837 7.01682L8.28837 1.12426C8.28598 1.01458 8.26195 0.906442 8.21766 0.806064C8.13314 0.603667 7.97222 0.442755 7.76983 0.35823C7.66945 0.313943 7.56131 0.289914 7.45163 0.287519L1.55907 0.287519C1.44919 0.287519 1.34038 0.309162 1.23886 0.351213C1.13735 0.393263 1.0451 0.454897 0.967404 0.532596C0.810484 0.689516 0.722328 0.902345 0.722328 1.12426C0.722328 1.34618 0.810485 1.55901 0.967404 1.71593C1.12432 1.87285 1.33715 1.96101 1.55907 1.96101L5.44227 1.95511L0.38056 7.01682C0.22428 7.1731 0.136482 7.38506 0.136482 7.60608C0.136482 7.82709 0.22428 8.03905 0.38056 8.19533C0.53684 8.35161 0.748801 8.43941 0.969815 8.43941C1.19083 8.43941 1.40279 8.35161 1.55907 8.19533L6.62078 3.13362L6.61488 7.01682C6.61443 7.12683 6.63577 7.23584 6.67766 7.33756C6.71955 7.43928 6.78117 7.5317 6.85895 7.60949C6.93674 7.68728 7.02917 7.7489 7.13089 7.79079C7.23261 7.83268 7.34162 7.85401 7.45163 7.85356C7.56164 7.85401 7.67065 7.83268 7.77237 7.79079C7.87409 7.7489 7.96651 7.68728 8.0443 7.60949C8.12209 7.5317 8.18371 7.43928 8.2256 7.33756C8.26749 7.23584 8.28882 7.12683 8.28837 7.01682Z"
                fill="#16121E"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
