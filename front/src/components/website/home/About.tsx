import Image from "next/image";
import { Button } from "@/components/ui/buttons/StandardButton";
import { ArrowUpIcon } from "public/icons/icons";
import SVGDevider from "public/img/svg/about-devider.svg";
import customStyles from "@/styles/home.module.scss";

const aboutStyles = {
  // Main container with responsive width constraints and centering
  layout:
    "relative bg-[#020103] mt-[300px] md:mt-[400px] lg:mt-[600px] pt-[calc(10%)] z-40 overflow-visible",

  // Main content wrapper with max-width constraints that change with screen size
  contentWrapper:
    "w-full max-w-[90%] sm:max-w-[85%] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto flex flex-col",

  headerWrapper:
    "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0",

  // Responsive typography
  titleFirst:
    "relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] pb-0",

  titleSecond:
    "relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] mt-0 pb-[16px] md:pb-[28px]",

  description:
    "relative text-sm md:text-base text-white leading-[1.5] mt-0 z-31",

  // Updated divider wrapper to always maintain max-w-7xl width
  dividerWrapper:
    "absolute left-1/2 transform -translate-x-1/2 top-[calc(100%+16px)] sm:top-[calc(100%+24px)] md:top-8 z-[-1] w-full max-w-7xl",
};

const About = () => {
  return (
    <div id="about" className={aboutStyles.layout}>
      <div className="relative">
        <div className={aboutStyles.contentWrapper}>
          <div className={aboutStyles.headerWrapper}>
            <div
              className={`${customStyles.titleColor} ${aboutStyles.titleFirst}`}
            >
              Companies that can help you in
            </div>
            <Button
              variant="outline"
              size="clg"
              radius="full"
              text="Know More"
              className="mt-2 sm:mt-0"
            >
              <ArrowUpIcon />
            </Button>
          </div>
          <div
            className={`${customStyles.titleColor} ${aboutStyles.titleSecond} relative z-10`}
          >
            developing your company for the future
          </div>
          <div className={aboutStyles.description}>
            Work in the IT field includes Web Design, UI/UX Design, Branding
            <br className="hidden md:block" /> and Shopify Development
          </div>
        </div>

        <div className={aboutStyles.dividerWrapper}>
          <Image
            src={SVGDevider}
            alt="Section divider"
            priority
            width={1400}
            height={350}
            style={{
              width: "100%", // Ensure it fills the container width
              height: "auto",
              margin: "0 20px", // Center the image
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
