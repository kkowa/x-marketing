import { Button } from "@/components/ui/buttons/StandardButton";
import { ArrowUpCircleIcon } from "public/icons/icons";

const servicesStyles = {
  headerWrapper:
    "relative flex text-black 2xl:pt-[140px] xl:pt-[140px] lg:pt-[140px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center 2xl:items-end xl:items-end lg:items-end md:items-center sm:items-center items-center w-full",
  textContainer:
    "w-full 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center",
  title:
    "relative 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl text-3xl leading-[1.2] pb-0",
  description: "relative text-base text-white leading-[1.5] mt-0 z-31",
  buttonContainer:
    "2xl:flex xl:flex lg:flex md:flex sm:flex flex 2xl:self-end xl:self-end lg:self-end 2xl:justify-end xl:justify-end lg:justify-end 2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-1/2 sm:w-1/2 w-1/2 md:justify-center sm:justify-center justify-center md:mt-6 sm:mt-6 mt-6 z-30",
};

const Services = () => {
  return (
    <>
      <div className={servicesStyles.headerWrapper}>
        <div className={servicesStyles.textContainer}>
          <div className={`title-color ${servicesStyles.title}`}>
            Let&apos;s work together <br /> with our us
          </div>
          <div className={servicesStyles.description}>
            help you to build website company that is modern, user friendly,
            <br />
            good CEO, and Clean design
          </div>
        </div>
        <div className={servicesStyles.buttonContainer}>
          <Button
            variant="outline"
            size="csm"
            radius="full"
            text="Get Started"
            className="2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-full 2xl:h-12 xl:h-12 lg:h-12 md:h-12 sm:h-12 h-10 2xl:px-6 xl:px-6 lg:px-6 md:px-6 sm:px-6 px-4"
          >
            <ArrowUpCircleIcon color="black" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Services;
