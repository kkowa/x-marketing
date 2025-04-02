/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │ Testimonials Component                              │
 * │                                                     │
 * │ This component displays customer testimonials in    │
 * │ a responsive grid layout. It includes a header      │
 * │ section and multiple review cards from clients.     │
 * │                                                     │
 * │ The component uses memoization to optimize          │
 * │ rendering performance and organizes testimonial     │
 * │ data separately for better maintainability.         │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */

import { useMemo } from "react";

// Components
import { ReviewCard } from "@/components/ui/cards/ReviewCard";
import Header from "@/components/website/common/Header";

// Data
import testimonialContent from "@/data/testimonial-data";

const Testimonials = () => {
  const { header, reviews } = testimonialContent;

  // Memoize review cards to prevent unnecessary re-renders
  const reviewCards = useMemo(() => {
    return reviews.map((review) => (
      <ReviewCard
        key={review.id}
        reviewPicture={review.image}
        reviewName={review.name}
        reviewInfo={review.position}
        review={review.content}
      />
    ));
  }, [reviews]);

  return (
    <div className="xs:-mt-[130px] container mx-auto -mt-[112px] mb-20 h-full sm:-mt-[160px] md:-mt-[200px] lg:-mt-75 xl:-mt-80">
      <Header
        title={header.title}
        description={
          <>
            {header.description.split("good")[0]}
            <br />
            good {header.description.split("good")[1]}
          </>
        }
        buttonContainer={false}
      />

      <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {reviewCards}
      </div>
    </div>
  );
};

export default Testimonials;
