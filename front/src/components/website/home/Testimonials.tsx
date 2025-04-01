import { ReviewCard } from "@/components/ui/cards/ReviewCard";
import Header from "@/components/ui/Header";
import Photo1 from "public/img/png/reviews/photo-1.png";
import Photo2 from "public/img/png/reviews/photo-2.png";
import Photo3 from "public/img/png/reviews/photo-3.png";
import Photo4 from "public/img/png/reviews/photo-4.png";
import Photo5 from "public/img/png/reviews/photo-5.png";
import Photo6 from "public/img/png/reviews/photo-6.png";

const Testimonials = () => {
  return (
    <div className="mt-12 container mx-auto h-full">
      <Header
        title="Our Product"
        description={
          <>
            help you to build website company that is modern, user friendly
            <br />
            good CEO, and Clean design
          </>
        }
        buttonContainer={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <ReviewCard
          reviewPicture={Photo1}
          reviewName="Nugraha"
          reviewInfo="Founder of Mangcoding"
          review="Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
        />
        <ReviewCard
          reviewPicture={Photo2}
          reviewName="Alex jounky"
          reviewInfo="Founder of Robs"
          review="Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
        />
        <ReviewCard
          reviewPicture={Photo3}
          reviewName="Chelsia alexy"
          reviewInfo="Founder of Frank"
          review="Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
        />
        <ReviewCard
          reviewPicture={Photo4}
          reviewName="Samsul Afroy"
          reviewInfo="Full Stack Development"
          review="Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
        />
        <ReviewCard
          reviewPicture={Photo5}
          reviewName="Purwa Adi Twingkiwingki"
          reviewInfo="UI/UX Designer"
          review="Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
        />
        <ReviewCard
          reviewPicture={Photo6}
          reviewName="Rizwan Gusnajmi"
          reviewInfo="Web Developer"
          review="Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress"
        />
      </div>
    </div>
  );
};

export default Testimonials;
