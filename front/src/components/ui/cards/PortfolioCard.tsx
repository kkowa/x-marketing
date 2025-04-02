import { memo } from "react";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "./Card";
import LinearBorder from "public/img/svg/portfolio/linear-border.svg";
import Icon from "public/img/svg/portfolio-card-icon.svg";

type PortfolioCardProps = {
  cardDescription: string;
  cardTitle: string;
  cardContent: React.ReactNode;
  imageSRC: StaticImageData;
  imageAlt: string;
  bottomTitle: string;
  bottomDescription: string;
  className?: string;
};

const PortfolioCard = memo<PortfolioCardProps>(
  ({
    cardDescription,
    cardTitle,
    cardContent,
    imageSRC,
    imageAlt,
    bottomTitle,
    bottomDescription,
    className = "",
  }) => {
    return (
      <div className={`mt-6 ${className}`}>
        <Card
          style={{
            background:
              "linear-gradient(45deg, #e6dbff 0%, #f6f6f6 44%, #d8d7ff 100%)",
          }}
          className="relative z-20 mb-6 overflow-hidden"
        >
          <div className="flex">
            {/* Left content section */}
            <div className="flex w-1/2 flex-col justify-between py-8 pl-6">
              <div>
                <div className="relative w-34">
                  <Image
                    src={LinearBorder}
                    alt=""
                    className="w-full"
                    priority
                  />
                  <CardDescription className="absolute inset-0 z-10 flex items-center justify-center text-xs text-[#0A0C14]">
                    {cardDescription}
                  </CardDescription>
                </div>
                <CardTitle className="text-4xl text-[#0A0C14]">
                  {cardTitle}
                </CardTitle>
              </div>
              <CardContent className="text-sm text-[#494C58]">
                {cardContent}
              </CardContent>
            </div>

            {/* Right image section */}
            <div className="relative flex w-[55%] flex-col justify-end overflow-hidden">
              <div className="relative">
                <div className="absolute -top-5 right-0 z-20">
                  <Image src={Icon} alt="Icon" priority />
                </div>
                <Image
                  src={imageSRC}
                  alt={imageAlt}
                  className="w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom section */}
        <div className="mb-6">
          <h3 className="mb-6 text-4xl text-white">{bottomTitle}</h3>
          <p className="text-base text-white">{bottomDescription}</p>
        </div>
      </div>
    );
  },
);

PortfolioCard.displayName = "PortfolioCard";

export default PortfolioCard;
