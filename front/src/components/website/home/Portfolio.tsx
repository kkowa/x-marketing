import PortfolioCard from "@/components/ui/cards/PortfolioCard";
import Header from "@/components/ui/Header";
import { ArrowUpCircleIcon } from "public/icons/Icons";

import Image1 from "public/img/png/portfolio/img-1.png";
import Image2 from "public/img/png/portfolio/img-2.png";
import Image3 from "public/img/png/portfolio/img-3.png";
import Image4 from "public/img/png/portfolio/img-4.png";

const Portfolio = () => {
  return (
    <div className="mt-65">
      <Header
        title="Our Product"
        description={
          <>
            help you to build website company that is modern, user friendly
            <br />
            good CEO, and Clean design
          </>
        }
        buttonContainer={true}
        buttonText="All Portfollio"
        buttonIcon={<ArrowUpCircleIcon color="black" />}
      />
      <div className="grid grid-cols-2 gap-6">
        <PortfolioCard
          cardDescription="Development Project"
          cardTitle="MStore"
          cardContent={
            <>
              Mangcoding is a biggest company in <br /> Indonesia, who provides
              the
            </>
          }
          imageSRC={Image1}
          imageAlt=""
          bottomTitle="MStore"
          bottomDescription="Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
        />
        <PortfolioCard
          cardDescription="Development Project"
          cardTitle="Beauty"
          cardContent={
            <>
              Mangcoding is a biggest company in <br /> Indonesia, who provides
              the
            </>
          }
          imageSRC={Image2}
          imageAlt=""
          bottomTitle="Beauty"
          bottomDescription="Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <PortfolioCard
          cardDescription="Development Project"
          cardTitle="Jual"
          cardContent={
            <>
              Mangcoding is a biggest company in <br /> Indonesia, who provides
              the
            </>
          }
          imageSRC={Image3}
          imageAlt=""
          bottomTitle="Mangcoding"
          bottomDescription="Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
        />
        <PortfolioCard
          cardDescription="Development Project"
          cardTitle="MangStore"
          cardContent={
            <>
              Mangcoding is a biggest company in <br /> Indonesia, who provides
              the
            </>
          }
          imageSRC={Image4}
          imageAlt=""
          bottomTitle="MangStore"
          bottomDescription="Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
        />
      </div>
    </div>
  );
};

export default Portfolio;
