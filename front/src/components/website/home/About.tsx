import Image from "next/image";
import { Button } from "@/components/ui/buttons/StandardButton";
import { ArrowUpIcon } from "public/icons/Icons";
import SVGDevider1 from "public/img/svg/about-devider-large.svg";
import SVGDevider2 from "public/img/svg/about-devider-small.svg";

const aboutStyles = {
  headerWrapper: "relative w-full",
  textContainer:
    "w-full 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center",
  title:
    "relative 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl text-3xl leading-[1.2] pb-0",
  description:
    "relative 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs text-white leading-[1.5] mt-4 z-20",
  buttonContainer:
    "static 2xl:absolute xl:absolute lg:absolute md:static sm:static static 2xl:right-0 xl:right-0 lg:right-0 2xl:top-[15px] xl:top-[15px] lg:top-[15px] 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6 mt-6 z-30 flex 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:flex sm:flex flex justify-center",
  SVGDeviderWrapper1:
    "relative hidden 2xl:flex xl:flex lg:flex left-0 w-full justify-center z-10 pointer-events-none 2xl:-mt-45 xl:-mt-45 lg:-mt-38",
  SVGDevider1:
    "w-[calc(100%+60px)] 2xl:max-w-[calc(100%+60px)] xl:max-w-[calc(100%+60px)] lg:max-w-[calc(100%+60px)] 2xl:h-auto xl:h-auto lg:h-auto",
  SVGDeviderWrapper2:
    "relative flex md:flex sm:flex w-full justify-center z-10 pointer-events-none lg:hidden xl:hidden 2xl:hidden md:-mt-8 sm:-mt-6 xs:-mt-6 -mt-6",
  SVGDevider2:
    "w-[calc(100%+60px)] max-w-[calc(100%+60px)] md:max-w-[calc(100%+60px)] sm:max-w-[calc(100%+60px)] h-auto md:h-auto sm:h-auto",
  mainContainer: "w-full relative flex flex-col",
};

const About = () => {
  return (
    <div className={aboutStyles.mainContainer}>
      <div className={aboutStyles.headerWrapper}>
        <div className={aboutStyles.textContainer}>
          <div className={`title-color ${aboutStyles.title}`}>
            Companies that can help you in <br />
            developing your company for the future
          </div>
          <div className={aboutStyles.description}>
            Work in the IT field includes Web Design, UI/UX Design, Branding
            <br className="hidden md:block" /> and Shopify Development
          </div>
        </div>
        <div className={aboutStyles.buttonContainer}>
          <Button
            variant="outline"
            radius="full"
            text="Know More"
            className="2xl:w-full xl:w-full lg:w-full md:w-1/2 sm:w-1/2 w-1/2 2xl:h-12 xl:h-12 lg:h-12 md:h-12 sm:h-12 h-10 2xl:px-6 xl:px-6 lg:px-6 md:px-6 sm:px-6 px-4"
          >
            <ArrowUpIcon />
          </Button>
        </div>
      </div>
      <div className={aboutStyles.SVGDeviderWrapper1}>
        <Image
          src={SVGDevider1}
          className={aboutStyles.SVGDevider1}
          alt="divider on large screen"
        />
      </div>
      <div className={aboutStyles.SVGDeviderWrapper2}>
        <Image
          src={SVGDevider2}
          className={aboutStyles.SVGDevider2}
          alt="divider on small screen"
        />
      </div>
    </div>
  );
};

export default About;
