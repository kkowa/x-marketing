import Image from "next/image";
import PortfolioCard from "@/components/ui/cards/PortfolioCard";
import Header from "@/components/ui/Header";

import Image1 from "public/img/png/portfolio/img-1.png";
import Image2 from "public/img/png/portfolio/img-2.png";
import Image3 from "public/img/png/portfolio/img-3.png";
import Image4 from "public/img/png/portfolio/img-4.png";
import Devider from "public/img/svg/portfolio-devider.svg";

import { ArrowUpCircleIcon } from "public/icons/Icons";

const Portfolio = () => {
  return (
    <div className="xl:-mt-30 lg:-mt-75 md:-mt-[200px] sm:-mt-[160px] xs:-mt-[130px] -mt-[112px]">
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

      <div className="relative z-20">
        <div className="grid grid-cols-2 gap-6">
          <div className="border-b-2 border-b-[#635189] relative">
            <PortfolioCard
              cardDescription="Development Project"
              cardTitle="MStore"
              cardContent={
                <>
                  Mangcoding is a biggest company in <br /> Indonesia, who
                  provides the
                </>
              }
              imageSRC={Image1}
              imageAlt=""
              bottomTitle="MStore"
              bottomDescription="Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
            />
          </div>
          <div className="border-b-2 border-b-[#635189] relative">
            <PortfolioCard
              cardDescription="Development Project"
              cardTitle="Beauty"
              cardContent={
                <>
                  Mangcoding is a biggest company in <br /> Indonesia, who
                  provides the
                </>
              }
              imageSRC={Image2}
              imageAlt=""
              bottomTitle="Beauty"
              bottomDescription="Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <PortfolioCard
            cardDescription="Development Project"
            cardTitle="Jual"
            cardContent={
              <>
                Mangcoding is a biggest company in <br /> Indonesia, who
                provides the
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
                Mangcoding is a biggest company in <br /> Indonesia, who
                provides the
              </>
            }
            imageSRC={Image4}
            imageAlt=""
            bottomTitle="MangStore"
            bottomDescription="Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
          />
        </div>
      </div>

      {/* Keep divider with its existing z-index but position it absolutely */}
      <div className="relative flex md:flex sm:flex w-full justify-center pointer-events-none -mt-65">
        <Image
          src={Devider}
          alt=""
          className="w-[calc(100%+60px)] 2xl:max-w-[calc(100%+60px)] xl:max-w-[calc(100%+60px)] lg:max-w-[calc(100%+60px)] 2xl:h-auto xl:h-auto lg:h-auto z-10"
        />
      </div>
    </div>
  );
};

export default Portfolio;
