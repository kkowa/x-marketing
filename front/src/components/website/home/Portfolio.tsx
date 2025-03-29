import PortfolioCard from "@/components/ui/cards/PortfolioCard";
import Header from "@/components/ui/Header";
import { ArrowUpCircleIcon } from "public/icons/Icons";

import Image1 from "public/img/png/portfolio/img-1.png";
// import Image2 from "public/img/png/portfolio/img-2.png";
// import Image3 from "public/img/png/portfolio/img-3.png";
// import Image4 from "public/img/png/portfolio/img-4.png";

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
      <PortfolioCard
        cardDescription="Development Project"
        cardTitle="MStore"
        cardContent="Mangcoding is a biggest company in Indonesia, who provides the"
        imageSRC={Image1}
        imageAlt=""
      />
    </div>
  );
};

export default Portfolio;
