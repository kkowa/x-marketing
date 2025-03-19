import { useRef } from "react";
import { Button } from "@/components/ui/button";
import custom_styles from "../../Hero.module.scss";
import { ArrowUpCircleIcon } from "public/icons/icons";

import Image from "next/image";
import SVGBlob1 from "public/img/svg/SVGBlob1.svg";
import SVGBlob2 from "public/img/svg/SVGBlob2.svg";
import SVGBlob3 from "public/img/svg/SVGBlob3.svg";

const styles = {
  nextSection:
    "relative max-w-[1200px] items-center justify-center bg-[#020103] text-white text-3xl font-bold mx-auto ",
  SVGBlob1: "absolute  left-[-800px] top-[-250px] z-60 ",
  SVGBlob2: "absolute  right-[-800px] top-[250px] z-60 ",
  SVGBlob3: "absolute  left-[-800px] top-[750px] z-60 ",
};

const Services = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div id="next-section" ref={nextSectionRef} className={styles.nextSection}>
      <div
        style={{
          display: "flex",
          color: "black",
          paddingTop: "140px",
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
              Let&apos;s work together <br /> with our us
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
            className="h-[50px] w-[161px] mt-[5px] rounded-full text-black bg-white hover:bg-white/90 z-10 flex items-center gap-2"
          >
            <span className="font-medium">Get Started</span>
            <ArrowUpCircleIcon color="black" />
          </Button>
        </div>
      </div>
      <Image className={styles.SVGBlob1} src={SVGBlob1} alt="Blob1" />
      <Image className={styles.SVGBlob2} src={SVGBlob2} alt="Blob2" />
      <Image className={styles.SVGBlob3} src={SVGBlob3} alt="Blob3" />
    </div>
  );
};

export default Services;
