import { useRef } from "react";
import { Button } from "@/components/ui/button";
import custom_styles from "../../Hero.module.scss";
// Import your custom icons from the correct path
import { ArrowUpCircleIcon } from "public/icons/icons";

const styles = {
  nextSection:
    "relative h-screen w-full items-center justify-center bg-[#020103] text-white text-3xl font-bold z-200 px-6  max-w-7xl mx-auto ",
};

const Services = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div id="next-section" ref={nextSectionRef} className={styles.nextSection}>
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
              Let's work together <br /> with our us
            </div>
          </div>
          <div className={custom_styles.home__description}>
            help you to build website company that is modern, user friendly,
            <br />
            good CEO, and Clean design
          </div>
        </div>

        <div>
          <Button
            variant="outline"
            className="ml-4 mb-3 w-[218px] h-9 rounded-full text-black bg-white hover:bg-white/90 z-10 flex items-center gap-2"
          >
            <span className="font-medium">Get Started</span>
            <ArrowUpCircleIcon color="black" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
