import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./Card";
import Image, { StaticImageData } from "next/image";
import LinearBorder from "public/img/svg/portfolio/linear-border.svg";
import Icon from "public/img/svg/portfolio-card-icon.svg";

interface PortfolioCardProps {
  cardDescription: string;
  cardTitle: string;
  cardContent: ReactNode;
  imageSRC: StaticImageData;
  imageAlt: string;
  bottomTitle: string;
  bottomDescription: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  cardDescription,
  cardTitle,
  cardContent,
  imageSRC,
  imageAlt,
  bottomTitle,
  bottomDescription,
}) => {
  return (
    <div className="mt-6">
      <Card
        style={{
          background:
            "linear-gradient(45deg, #e6dbff 0%, #f6f6f6 44%, #d8d7ff 100%)",
        }}
        className="mb-6 z-20"
      >
        <div className="flex relative">
          <div className="flex flex-col justify-between flex-grow w-1/2 pl-[24px] py-[34px]">
            <div className="relative">
              <div className="relative w-34 ">
                <Image src={LinearBorder} alt="" className="w-full" />
                <CardDescription className="absolute inset-0 z-10 flex items-center justify-center text-[#0A0C14] text-[12px]">
                  {cardDescription}
                </CardDescription>
              </div>
              <CardTitle className="text-[32px] text-[#0A0C14]">
                {cardTitle}
              </CardTitle>
            </div>
            <CardContent className="text-[#494C58] text-[14px]">
              {cardContent}
            </CardContent>
          </div>

          <div className="w-[55%] relative overflow-hidden flex flex-col justify-end">
            <div className="relative">
              <div className="absolute -top-5 right-0 z-20">
                <Image src={Icon} alt="" />
              </div>
              <Image
                src={imageSRC}
                alt={imageAlt}
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Card>
      <div className="mb-6">
        <h3 className="text-white text-4xl mb-6">{bottomTitle}</h3>
        <p className="text-white text-base">{bottomDescription}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
