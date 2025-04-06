import Image from "next/image";
import { Button } from "@/components/ui/buttons/StandardButton";
import { ArrowUpIcon } from "public/icons/Icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/cards/Card";
import { StaticImageData } from "next/image";
import { CSSProperties } from "react";

interface ImagePositionProps {
  className?: string;
  style?: CSSProperties;
}

interface ServiceCardProps {
  bgColor: string;
  isLarge?: boolean;
  icon: StaticImageData;
  iconAlt: string;
  title: string;
  description: string;
  buttonText: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: ImagePositionProps;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  bgColor,
  isLarge = false,
  icon,
  iconAlt,
  title,
  description,
  buttonText,
  image,
  imageAlt,
  imagePosition = {},
}) => {
  const cardSizeClass = isLarge ? "w-full lg:w-[57.5%]" : "w-full lg:w-[42.5%]";
  const descContainerClass = isLarge
    ? "2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full w-full"
    : "2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-1/2 sm:w-1/2 xs:w-full w-full";
  // text-3xl leading-[1.2] sm:mb-7 sm:text-5xl md:text-5xl lg:mb-8 xl:text-6xl
  return (
    <Card
      className={`relative overflow-hidden ${cardSizeClass} shadow-md transition-shadow duration-300 hover:shadow-lg`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={`${descContainerClass} flex h-full flex-col px-8 py-10`}>
        <Image
          src={icon}
          className="mb-6 h-15 w-15"
          alt={iconAlt}
          width={60}
          height={60}
        />
        <div className="flex flex-grow flex-col justify-between gap-4">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-white lg:text-3xl">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white sm:text-sm lg:text-base">
            <p>{description}</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="link"
              size="sm"
              text={buttonText}
              className="text-white underline sm:text-sm lg:text-base"
            >
              <ArrowUpIcon color="white" />
            </Button>
          </CardFooter>
        </div>
      </div>
      <div
        className={`absolute top-10 hidden overflow-hidden sm:block ${
          imagePosition.className || "sm:w-[60%] md:w-[52%] lg:w-[58%]"
        }`}
        style={imagePosition.style || {}}
      >
        <Image
          src={image}
          alt={imageAlt}
          className="h-auto w-full object-cover"
          width={500}
          height={300}
        />
      </div>
    </Card>
  );
};

export default ServiceCard;
