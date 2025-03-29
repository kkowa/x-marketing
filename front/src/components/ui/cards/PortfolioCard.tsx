import { Card, CardContent, CardDescription, CardTitle } from "./Card";
import Image, { StaticImageData } from "next/image";

interface PortfolioCardProps {
  cardDescription: string;
  cardTitle: string;
  cardContent: string;
  imageSRC: StaticImageData;
  imageAlt: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  cardDescription,
  cardTitle,
  cardContent,
  imageSRC,
  imageAlt,
}) => {
  return (
    <div>
      <div>
        <Card
          style={{
            background: "portfolioCardColor",
          }}
        >
          <div className="flex">
            <div className="flex flex-col justify-between flex-grow w-1/2 px-8 py-10">
              <CardDescription className="border-2">
                {cardDescription}
              </CardDescription>
              <CardTitle className="text-4xl">{cardTitle}</CardTitle>
              <CardContent>{cardContent}</CardContent>
            </div>
            <Image src={imageSRC} alt={imageAlt} className="w-1/2 mt-8" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioCard;
