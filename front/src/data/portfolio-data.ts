import { StaticImageData } from "next/image";

import Image1 from "public/img/png/portfolio/img-1.png";
import Image2 from "public/img/png/portfolio/img-2.png";
import Image3 from "public/img/png/portfolio/img-3.png";
import Image4 from "public/img/png/portfolio/img-4.png";

type PortfolioHeader = {
  title: string;
  description: string;
  buttonText: string;
};

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  content: string;
  image: StaticImageData;
  bottomTitle: string;
  bottomDescription: string;
  hasBorder: boolean;
};

type PortfolioContent = {
  header: PortfolioHeader;
  portfolioItems: PortfolioItem[];
};

const portfolioContent: PortfolioContent = {
  header: {
    title: "Our Product",
    description:
      "help you to build website company that is modern, user friendly good CEO, and Clean design",
    buttonText: "All Portfolio",
  },
  portfolioItems: [
    {
      id: 1,
      title: "MStore",
      description: "Development Project",
      content: "Mangcoding is a biggest company in Indonesia, who provides the",
      image: Image1,
      bottomTitle: "MStore",
      bottomDescription:
        "Mangcoding is a biggest company in Indonesia, who provides the",
      hasBorder: true,
    },
    {
      id: 2,
      title: "Beauty",
      description: "Development Project",
      content: "Mangcoding is a biggest company in Indonesia, who provides the",
      image: Image2,
      bottomTitle: "Beauty",
      bottomDescription:
        "Mangcoding is a biggest company in Indonesia, who provides the",
      hasBorder: true,
    },
    {
      id: 3,
      title: "Jual",
      description: "Development Project",
      content: "Mangcoding is a biggest company in Indonesia, who provides the",
      image: Image3,
      bottomTitle: "Mangcoding",
      bottomDescription:
        "Mangcoding is a biggest company in Indonesia, who provides the",
      hasBorder: false,
    },
    {
      id: 4,
      title: "MangStore",
      description: "Development Project",
      content: "Mangcoding is a biggest company in Indonesia, who provides the",
      image: Image4,
      bottomTitle: "MangStore",
      bottomDescription:
        "Mangcoding is a biggest company in Indonesia, who provides the",
      hasBorder: false,
    },
  ],
};

export default portfolioContent;
