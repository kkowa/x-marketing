/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │                 Title Component                     │
 * │                                                     │
 * │ This component renders the main title content,      │
 * │ including the headline, description text, and CTA   │
 * │ button. It accepts content data via props and is    │
 * │ optimized with React.memo to prevent unnecessary    │
 * │ re-renders.                                         │
 * │                                                     │
 * │ Features:                                           │
 * │ - Accepts any data source with the required fields  │
 * │ - Responsive typography using Tailwind breakpoints  │
 * │ - Consistent spacing with responsive margins        │
 * │ - Icon integration with the CTA button              │
 * │ - Pure rendering component with no internal state   │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */
import { memo } from "react";

// Assets
import { ArrowUpCircleIcon } from "public/icons/Icons";

// Components
import { Button } from "@/components/ui/buttons/StandardButton";

type TitleProps = {
  title: string;
  description: string;
  button: string;
};

const Title = memo(({ title, description, button }: TitleProps) => (
  <>
    <h1 className="title-color z-50 mb-6 text-5xl leading-[1.25] sm:mb-7 sm:text-7xl lg:mb-8 lg:text-8xl">
      {title}
    </h1>
    <p className="mb-6 text-xs sm:mb-7 sm:text-sm lg:mb-8 lg:text-base">
      {description}
    </p>
    <Button
      variant="outline"
      size="lg"
      radius="full"
      text={button}
      className="sm:text-s m h-10 w-36 text-xs text-black sm:h-11 sm:w-38 lg:h-12 lg:w-40 lg:text-base"
    >
      <ArrowUpCircleIcon color="black" />
    </Button>
  </>
));

Title.displayName = "Title";
export default Title;
