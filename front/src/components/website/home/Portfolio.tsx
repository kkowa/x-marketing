/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │ Portfolio Component                                 │
 * │                                                     │
 * │ This component displays a portfolio section with    │
 * │ a header, grid of portfolio cards, and a divider.   │
 * │ The section showcases various projects with images  │
 * │ and descriptions. It uses responsive design for     │
 * │ optimal display across different screen sizes.      │
 * │                                                     │
 * │ Performance is optimized with proper image loading  │
 * │ strategies and memoized card rendering.             │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */

import { useMemo } from "react";

// Assets
import Devider from "public/img/svg/portfolio-devider.svg";
import { ArrowUpCircleIcon } from "public/icons/Icons";

// Components
import Header from "@/components/website/common/Header";
import PortfolioCard from "@/components/ui/cards/PortfolioCard";
import DeviderLarge from "@/components/website/common/deviders/DeviderLarge";

// Data
import portfolioContent from "@/data/portfolio-data";

const Portfolio = () => {
  const { header, portfolioItems } = portfolioContent;

  const portfolioCards = useMemo(() => {
    return portfolioItems.map((item) => (
      <div
        key={item.id}
        className={
          item.hasBorder ? "relative border-b-2 border-b-[#635189]" : ""
        }
      >
        <PortfolioCard
          cardDescription={item.description}
          cardTitle={item.title}
          cardContent={<>{item.content}</>}
          imageSRC={item.image}
          imageAlt={`${item.title} project image`}
          bottomTitle={item.bottomTitle}
          bottomDescription={item.bottomDescription}
        />
      </div>
    ));
  }, [portfolioItems]);

  return (
    <div className="xs:-mt-[130px] -mt-[112px] sm:-mt-[160px] md:-mt-[200px] lg:-mt-75 xl:-mt-30">
      <Header
        title={header.title}
        description={
          <>
            {header.description.split("good")[0]}
            <br />
            good {header.description.split("good")[1]}
          </>
        }
        buttonContainer={true}
        buttonText={header.buttonText}
        buttonIcon={<ArrowUpCircleIcon color="black" />}
        buttonPosition="bottom"
        buttonSize="small"
      />

      <div className="relative z-20">
        {/* First row */}
        <div className="grid grid-cols-2 gap-6">
          {portfolioCards.slice(0, 2)}
        </div>
        {/* Second row */}
        <div className="grid grid-cols-2 gap-6">
          {portfolioCards.slice(2, 4)}
        </div>
      </div>

      {/* Divider */}
      <div className="-mt-58">
        <DeviderLarge
          src={Devider}
          alt="divider on large screen"
          className="w-[calc(100%+60px)] lg:h-auto lg:max-w-[calc(100%+60px)] xl:h-auto xl:max-w-[calc(100%+60px)] 2xl:h-auto 2xl:max-w-[calc(100%+60px)]"
        />
      </div>
    </div>
  );
};

export default Portfolio;
