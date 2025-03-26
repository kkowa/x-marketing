import { Button } from "@/components/ui/buttons/StandardButton";
import { ArrowUpCircleIcon } from "public/icons/icons";
import {
  Card,
  CardContent,
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

import { ArrowUpIcon } from "public/icons/icons";

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
  cardsContainer: "w-ful",
  cardRow: "flex flex-col lg:flex-row w-full mb-6 gap-6",
  cardIcon: "w-[60px] h-[60px] mb-8",
  cardLarge:
    "relative overflow-hidden  w-full 2xl:w-[57.5%] xl:w-[57.5%] lg:w-[57.5%] md:w-[100%] sm:w-[100%] xs:w-[100%] w-[100%] size-87.5 shadow-md hover:shadow-lg transition-shadow duration-300",
  cardLargeDescriptionContainer:
    "2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full w-full h-full px-8 py-10 flex flex-col",
  cardSmall:
    "relative overflow-hidden w-full lg:w-[42.5%] md:w-[100%] sm:w-[100%] xs:w-[100%] w-[100%] size-87.5 shadow-md hover:shadow-lg transition-shadow duration-300",
  cardSmallDescriptionContainer:
    "2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-1/2 sm:w-1/2 xs:w-full w-full h-full px-8 py-10 flex flex-col",
  cardTitle: "text-4xl font-medium text-white",
  CardDescriptionContainer: "flex flex-col justify-between flex-grow",
  cardDescriptionText: "text-white",
  cardImage: "w-full h-auto object-cover",
  cardButton: "text-white underline",
  cardButtonColor: "white",
};

const content = {
  title1: "Website Dev",
  icon1Alt: "service image 1",
  image1Alt: "service image 1",
  title2: "UI/UX Design",
  icon2Alt: "service image 2",
  image2Alt: "service image 2",
  title3: "Branding",
  icon3Alt: "service image 3",
  image3Alt: "service image 3",
  title4: "Shopify",
  icon4Alt: "service image 4",
  image4Alt: "service image 4",
  description:
    "help you to build website company that is modern, user friendly, good CEO, and Clean design",
  button: "Start with us",
};

const ServicesCardDescription = (
  cardSizeSpecificDescriptionContainer: string,
  serviceIconSrc: string,
  cardIcon: string,
  iconAlt: string,
  cardDescriptionContainer: string,
  cardTitleContainer: string,
  title: string,
  cardDescriptionTextContainer: string,
  description: string,
  buttonText: string,
  cardButtonStyle: string,
  cardButtonColor: string
) => {
  return (
    <div className={cardSizeSpecificDescriptionContainer}>
      <Image src={serviceIconSrc} className={cardIcon} alt={iconAlt} />
      <div className={cardDescriptionContainer}>
        <CardHeader>
          <CardTitle className={cardTitleContainer}>{title}</CardTitle>
        </CardHeader>
        <CardContent className={cardDescriptionTextContainer}>
          <p>{description}</p>
        </CardContent>
        <CardFooter>
          <Button
            variant="link"
            size="sm"
            text={buttonText}
            className={cardButtonStyle}
          >
            <ArrowUpIcon color={cardButtonColor} />
          </Button>
        </CardFooter>
      </div>
    </div>
  );
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
            <Card className={`bg-[#504CFF] ${servicesStyles.cardLarge}`}>
              {ServicesCardDescription(
                servicesStyles.cardLargeDescriptionContainer,
                ServiceIcon1,
                servicesStyles.cardIcon,
                content.icon1Alt,
                servicesStyles.CardDescriptionContainer,
                servicesStyles.cardTitle,
                content.title1,
                servicesStyles.cardDescriptionText,
                content.description,
                content.button,
                servicesStyles.cardButton,
                servicesStyles.cardButtonColor
              )}
              <div className="absolute top-10 sm:-right-36 xs:-right-56 sm:block hidden  2xl:w-[71%] xl:w-[71%] lg:w-[71%] md:w-[56%] sm:w-[72%] xs:w-[98%] overflow-hidden">
                <Image
                  src={ServiceImg1}
                  alt={content.image1Alt}
                  className={servicesStyles.cardImage}
                />
              </div>
            </Card>

            <Card className={`bg-[#151515] ${servicesStyles.cardSmall}`}>
              {ServicesCardDescription(
                servicesStyles.cardSmallDescriptionContainer,
                ServiceIcon2,
                servicesStyles.cardIcon,
                content.icon2Alt,
                servicesStyles.CardDescriptionContainer,
                servicesStyles.cardTitle,
                content.title2,
                servicesStyles.cardDescriptionText,
                content.description,
                content.button,
                servicesStyles.cardButton,
                servicesStyles.cardButtonColor
              )}
              <div className="absolute top-10 sm:-right-12 xs:-right-12 sm:block hidden  2xl:w-[46%] xl:w-[46%] lg:w-[46%] md:w-[46%] sm:w-[57%] xs:w-[98%] overflow-hidden">
                <Image
                  src={ServiceImg2}
                  className={servicesStyles.cardImage}
                  alt={content.image2Alt}
                />
              </div>
            </Card>
          </div>

          <div className={servicesStyles.cardRow}>
            <Card className={`flex bg-[#151515] ${servicesStyles.cardSmall}`}>
              {ServicesCardDescription(
                servicesStyles.cardSmallDescriptionContainer,
                ServiceIcon3,
                servicesStyles.cardIcon,
                content.icon3Alt,
                servicesStyles.CardDescriptionContainer,
                servicesStyles.cardTitle,
                content.title3,
                servicesStyles.cardDescriptionText,
                content.description,
                content.button,
                servicesStyles.cardButton,
                servicesStyles.cardButtonColor
              )}
              <div className="absolute top-10 lg:-right-36 md:-right-40 xs:-right-36 sm:block hidden  2xl:w-[94%] xl:w-[94%] lg:w-[94%] md:w-[80%] sm:w-[94%] xs:w-[98%] overflow-hidden">
                <Image
                  src={ServiceImg3}
                  className={servicesStyles.cardImage}
                  alt={content.image3Alt}
                />
              </div>
            </Card>

            <Card className={`flex bg-[#854CFF] ${servicesStyles.cardLarge}`}>
              {ServicesCardDescription(
                servicesStyles.cardLargeDescriptionContainer,
                ServiceIcon4,
                servicesStyles.cardIcon,
                content.icon4Alt,
                servicesStyles.CardDescriptionContainer,
                servicesStyles.cardTitle,
                content.title4,
                servicesStyles.cardDescriptionText,
                content.description,
                content.button,
                servicesStyles.cardButton,
                servicesStyles.cardButtonColor
              )}
              <div className="absolute top-10 sm:-right-18 xs:-right-56 sm:block hidden  2xl:w-[58%] xl:w-[58%] lg:w-[58%] md:w-[52%] sm:w-[60%] xs:w-[60%] overflow-hidden">
                <Image
                  src={ServiceImg4}
                  className={servicesStyles.cardImage}
                  alt={content.image4Alt}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
