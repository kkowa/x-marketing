import { Button } from "@/components/ui/buttons/StandardButton";
import { ArrowUpCircleIcon } from "public/icons/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

import Image from "next/image";

import ServiceIcon1 from "public/img/svg/services/service-icon-1.svg";
import ServiceIcon2 from "public/img/svg/services/service-icon-2.svg";
import ServiceIcon3 from "public/img/svg/services/service-icon-3.svg";
import ServiceIcon4 from "public/img/svg/services/service-icon-4.svg";

import ServiceImg1 from "public/img/svg/services/service-img-1.svg";
import ServiceImg2 from "public/img/svg/services/service-img-2.svg";
import ServiceImg3 from "public/img/svg/services/service-img-3.svg";
import ServiceImg4 from "public/img/svg/services/service-img-4.svg";

const servicesStyles = {
  headerWrapper:
    "relative flex text-black 2xl:pt-[140px] xl:pt-[140px] lg:pt-[140px] flex-col md:flex-col sm:flex-col 2xl:flex-row xl:flex-row lg:flex-row 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center 2xl:items-end xl:items-end lg:items-end md:items-center sm:items-center items-center w-full 2xl:mt-0 xl:mt-0 lg:mt-0 md:-mt-[200px] sm:-mt-[160px] xs:-mt-[130px] -mt-[112px]",
  textContainer:
    "w-full 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center xs:text-center text-center md:pb-[min(12%,70px)] sm:pb-[min(12%,50px)] xs:pb-[min(12%,30px)] pb-[min(12%,50px)] sm:pb-[8%] 2xl:pb-0 xl:pb-0 lg:pb-0",
  title:
    "relative 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-xl leading-[1.2] pb-0 whitespace-nowrap",
  description:
    "relative 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs text-white leading-[1.5] mt-4 z-31 whitespace-nowrap overflow-hidden text-ellipsis",
  buttonContainer:
    "2xl:flex xl:flex lg:flex md:flex sm:flex flex 2xl:self-end xl:self-end lg:self-end 2xl:justify-end xl:justify-end lg:justify-end 2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-1/2 sm:w-1/2 w-1/2 md:justify-center sm:justify-center justify-center z-30",
  cardsContainer: "w-ful z-80",
  cardRow: "flex flex-col lg:flex-row w-full mb-6 gap-6",
  cardSmall:
    "w-full lg:w-[57.5%] md:w-[100%] sm:w-[100%] xs:w-[100%] w-[100%] size-[320px] shadow-md hover:shadow-lg transition-shadow duration-300",
  cardLarge:
    "w-full lg:w-[42.5%] md:w-[100%] sm:w-[100%] xs:w-[100%] w-[100%] size-[320px] shadow-md hover:shadow-lg transition-shadow duration-300",
};

const Services = () => {
  return (
    <>
      <div className={servicesStyles.headerWrapper}>
        <div className={servicesStyles.textContainer}>
          <div className={`title-color ${servicesStyles.title}`}>
            Let&apos;s work together{" "}
            <br className="hidden 2xl:block xl:block lg:block" /> with our us
          </div>
          <div className={servicesStyles.description}>
            help you to build website company that is modern, user friendly,
            <br className="hidden 2xl:block xl:block lg:block" />
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
      <div id="services-cards" className="py-16">
        <div className={servicesStyles.cardsContainer}>
          <div className={servicesStyles.cardRow}>
            <Card className={`flex bg-[#504CFF] ${servicesStyles.cardSmall}`}>
              <div>
                <Image src={ServiceIcon1} alt="service image 1" />
                <CardHeader>
                  <CardTitle className="text-white">Website Dev</CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <p>
                    help you to build website company that is modern, user
                    friendly, good CEO, and Clean design
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="text" size="sm" className="text-white">
                    Start with us
                  </Button>
                </CardFooter>
              </div>
              <Image src={ServiceImg1} alt="service image 1" />
            </Card>

            <Card className={`flex bg-[#151515] ${servicesStyles.cardLarge}`}>
              <div>
                <Image src={ServiceIcon2} alt="service icon 2" />
                <CardHeader>
                  <CardTitle className="text-white">UI/UX Design</CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <p>
                    help you to build website company that is modern, user
                    friendly, good CEO, and Clean design
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="text" size="sm" className="text-white">
                    Start with us
                  </Button>
                </CardFooter>
              </div>
              <Image src={ServiceImg2} alt="service icon 2" />
            </Card>
          </div>

          <div className={servicesStyles.cardRow}>
            <Card className={`flex bg-[#151515] ${servicesStyles.cardLarge}`}>
              <div>
                <Image src={ServiceIcon3} alt="service icon 3" />
                <CardHeader>
                  <CardTitle className="text-white">Branding</CardTitle>
                  <CardDescription className="text-white">
                    Better search rankings
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-white">
                  <p>
                    help you to build website company that is modern, user
                    friendly, good CEO, and Clean design
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="text" size="sm" className="text-white">
                    Start with us
                  </Button>
                </CardFooter>
              </div>
              <Image src={ServiceImg3} alt="service icon 3" />
            </Card>

            <Card className={`flex bg-[#854CFF] ${servicesStyles.cardSmall}`}>
              <div>
                <Image src={ServiceIcon4} alt="service icon 4" />
                <CardHeader>
                  <CardTitle className="text-white">Shopify</CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <p>
                    help you to build website company that is modern, user
                    friendly, good CEO, and Clean design
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="text" size="sm" className="text-white">
                    Start with us
                  </Button>
                </CardFooter>
              </div>
              <Image src={ServiceImg4} alt="service icon 4" />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
