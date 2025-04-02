import { StaticImageData } from "next/image";

import Photo1 from "public/img/png/reviews/photo-1.png";
import Photo2 from "public/img/png/reviews/photo-2.png";
import Photo3 from "public/img/png/reviews/photo-3.png";
import Photo4 from "public/img/png/reviews/photo-4.png";
import Photo5 from "public/img/png/reviews/photo-5.png";
import Photo6 from "public/img/png/reviews/photo-6.png";

type TestimonialHeader = {
  title: string;
  description: string;
};

type Review = {
  id: number;
  name: string;
  position: string;
  content: string;
  image: StaticImageData;
};

type TestimonialContent = {
  header: TestimonialHeader;
  reviews: Review[];
};

const testimonialContent: TestimonialContent = {
  header: {
    title: "What they say about us",
    description:
      "help you to build website company that is modern, user friendly good CEO, and Clean design",
  },
  reviews: [
    {
      id: 1,
      name: "Nugraha",
      position: "Founder of Mangcoding",
      content:
        "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
      image: Photo1,
    },
    {
      id: 2,
      name: "Alex jounky",
      position: "Founder of Robs",
      content:
        "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
      image: Photo2,
    },
    {
      id: 3,
      name: "Chelsia alexy",
      position: "Founder of Frank",
      content:
        "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
      image: Photo3,
    },
    {
      id: 4,
      name: "Samsul Afroy",
      position: "Full Stack Development",
      content:
        "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
      image: Photo4,
    },
    {
      id: 5,
      name: "Purwa Adi Twingkiwingki",
      position: "UI/UX Designer",
      content:
        "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
      image: Photo5,
    },
    {
      id: 6,
      name: "Rizwan Gusnajmi",
      position: "Web Developer",
      content:
        "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
      image: Photo6,
    },
  ],
};

export default testimonialContent;
