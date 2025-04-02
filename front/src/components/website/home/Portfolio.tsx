import Image from "next/image";
import PortfolioCard from "@/components/ui/cards/PortfolioCard";
import Header from "@/components/website/common/Header";

import Image1 from "public/img/png/portfolio/img-1.png";
import Image2 from "public/img/png/portfolio/img-2.png";
import Image3 from "public/img/png/portfolio/img-3.png";
import Image4 from "public/img/png/portfolio/img-4.png";
import Devider from "public/img/svg/portfolio-devider.svg";

import { ArrowUpCircleIcon } from "public/icons/Icons";

const Portfolio = () => {
  return (
    <div className="xs:-mt-[130px] -mt-[112px] sm:-mt-[160px] md:-mt-[200px] lg:-mt-75 xl:-mt-30">
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
          <div className="relative border-b-2 border-b-[#635189]">
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
          <div className="relative border-b-2 border-b-[#635189]">
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
      <div className="pointer-events-none relative -mt-65 flex w-full justify-center sm:flex md:flex">
        <Image
          src={Devider}
          alt=""
          className="z-10 w-[calc(100%+100px)] lg:h-auto lg:max-w-[calc(100%+60px)] xl:h-auto xl:max-w-[calc(100%+60px)] 2xl:h-auto 2xl:max-w-[calc(100%+100px)]"
        />
      </div>
    </div>
  );
};

export default Portfolio;
