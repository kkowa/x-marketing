import { Button } from "@/components/ui/buttons/StandardButton";
import { ArrowUpCircleIcon } from "public/icons/icons";
import Image from "next/image";
import SVGBlob1 from "public/img/svg/SVGBlob1.svg";
import SVGBlob2 from "public/img/svg/SVGBlob2.svg";
import SVGBlob3 from "public/img/svg/SVGBlob3.svg";

import customStyles from "@/styles/home.module.scss";

const servicesStyles = {
  layout:
    "relative max-w-6xl items-center justify-center bg-[#020103] text-white text-3xl font-bold mx-auto",
  container: "flex text-black pt-[140px] justify-between items-end",
  titleContainer: "flex items-end",
  homeDescription: "text-base leading-[1.5] text-gray-700",
  title: "relative text-6xl leading-[1.2] pb-[28px]",
  description: "relative text-base text-white leading-[1.5] mt-0 z-31",
  SVGBlob1: "absolute left-[-800px] top-[-250px] z-60",
  SVGBlob2: "absolute right-[-800px] top-[250px] z-60",
  SVGBlob3: "absolute left-[-800px] top-[750px] z-60",
};

const Services = () => {
  return (
    <div id="services" className={servicesStyles.layout}>
      <div className={servicesStyles.container}>
        <div>
          <div className={servicesStyles.titleContainer}>
            <div
              className={`${customStyles.titleColor} ${servicesStyles.title}`}
            >
              Let&apos;s work together <br /> with our us
            </div>
          </div>
          <div className={servicesStyles.description}>
            help you to build website company that is modern, user friendly,
            <br />
            good CEO, and Clean design
          </div>
        </div>
        <div>
          <Button variant="outline" size="csm" radius="full" text="Get Started">
            <ArrowUpCircleIcon color="black" />
          </Button>
        </div>
      </div>
      <Image className={servicesStyles.SVGBlob1} src={SVGBlob1} alt="Blob1" />
      <Image className={servicesStyles.SVGBlob2} src={SVGBlob2} alt="Blob2" />
      <Image className={servicesStyles.SVGBlob3} src={SVGBlob3} alt="Blob3" />
    </div>
  );
};

export default Services;
