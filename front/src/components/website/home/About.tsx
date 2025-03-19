import { useRef } from "react";
import { Button } from "@/components/ui/button";
import custom_styles from "../../Hero.module.scss";
import { ArrowUpIcon } from "public/icons/icons";
import Image from "next/image";
import SVGDevider from "public/img/svg/about-devider.svg";

const styles = {
  nextSection:
    "relative max-w-[1200px] items-center justify-center  bg-[#020103] text-white text-3xl font-bold mt-[600px] z-40 pt-[calc(10%)] max-w-7xl mx-auto ",
  SVGDevider: "absolute top-[200px] r-[-40px] z-[-1] max-w-[1280px]",
};

const About = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div id="next-section" ref={nextSectionRef} className={styles.nextSection}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
          <Button
            variant="outline"
            size="sm"
            className="h-[50px] w-[238px] mt-[5px] rounded-full text-black bg-white hover:bg-white/90 z-10 flex items-center gap-2"
          >
            <span className="font-medium">Know More</span>
            <ArrowUpIcon />
          </Button>
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
        <Image
          className={`${styles.SVGDevider} !w-[1280px]`}
          src={SVGDevider}
          alt="Section divider"
        />
      </div>
    </div>
  );
};

export default About;
