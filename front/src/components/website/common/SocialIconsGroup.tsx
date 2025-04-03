/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │              SocialIconGroup Component              │
 * │                                                     │
 * │ This component renders a horizontal group of social │
 * │ media icons based on data from the heroContent      │
 * │ object. It maps through the socialIcons array and   │
 * │ renders each icon with appropriate styling.         │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */

import { memo } from "react";

// Data
import { heroContent, socialIcons } from "@/data/hero-data";

const SocialIconGroup = memo(() => (
  <div className="mb-8 flex w-full justify-center gap-3 sm:mb-9 sm:gap-4 lg:mb-10 lg:gap-4">
    {heroContent.socialIcons.map(({ type }) => {
      const Icon = socialIcons[type];
      return (
        <div key={type} className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6">
          <Icon />
        </div>
      );
    })}
  </div>
));

SocialIconGroup.displayName = "SocialIconGroup";

export default SocialIconGroup;
