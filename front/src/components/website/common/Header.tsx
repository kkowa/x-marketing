import React, { ReactNode } from "react";
// Components
import {
  Button,
  type ButtonProps,
} from "@/components/ui/buttons/StandardButton";
// Utils
import { cn } from "@/lib/utils";

const getButtonPosition = (position: string) => {
  const baseClass =
    "z-30 mt-6 flex justify-center lg:absolute lg:right-0 lg:mt-0";
  const positions = {
    top: `${baseClass} lg:top-2 xl:top-4`,
    middle: `${baseClass} lg:top-1/2 lg:-translate-y-1/2`,
    bottom: `${baseClass} lg:bottom-0`,
    default: `${baseClass} lg:top-4`,
  };
  return positions[position as keyof typeof positions] || positions.default;
};

const getButtonSize = (size: string) => {
  const sizes = {
    small: {
      container: "w-1/2 lg:w-1/6",
      size: "sm" as ButtonSizeType,
      className:
        "h-8 lg:h-10 xl:h-12 w-full px-4 lg:px-5 xl:px-6 py-3 text-xs lg:text-sm xl:text-base",
    },
    large: {
      container: "w-1/2 lg:w-1/4",
      size: "lg" as ButtonSizeType,
      className:
        "h-10 lg:h-12 xl:h-14 w-full px-4 lg:px-5 xl:px-6 py-3 text-sm lg:text-base xl:text-lg",
    },
  };
  return sizes[size as keyof typeof sizes] || sizes.large;
};

type ButtonSizeType = NonNullable<ButtonProps["size"]>;

type HeaderProps = {
  title: string | ReactNode;
  description: string | ReactNode;
  preventDescriptionWrap?: boolean; // New prop to control description text wrapping
  buttonContainer?: boolean;
  buttonText?: string;
  buttonIcon?: ReactNode;
  buttonPosition?: "top" | "middle" | "bottom";
  buttonSize?: "small" | "large";
};

const Header = ({
  title,
  description,
  preventDescriptionWrap = false, // Default to allowing wrapping
  buttonContainer,
  buttonText,
  buttonIcon,
  buttonPosition = "top",
  buttonSize = "large",
}: HeaderProps) => {
  const { container, size, className } = getButtonSize(buttonSize);

  // Create description class with conditional whitespace-nowrap
  const descriptionClass = cn(
    "relative z-31 overflow-hidden text-xs leading-[1.75] text-white sm:text-sm lg:text-base",
    preventDescriptionWrap && "whitespace-nowrap truncate", // Only add nowrap if prevention is requested
  );

  return (
    <div className="relative flex w-full flex-col items-center text-black lg:flex-row lg:items-end lg:justify-between">
      <div className="w-full text-center lg:pb-0 lg:text-left">
        <div className="title-color relative mb-6 overflow-hidden text-3xl leading-[1.2] sm:mb-7 sm:text-5xl md:text-5xl lg:mb-8 xl:text-6xl">
          {title}
        </div>
        <div className={descriptionClass}>{description}</div>
      </div>
      {buttonContainer && (
        <div className={cn(getButtonPosition(buttonPosition), container)}>
          <Button
            variant="outline"
            size={size}
            radius="full"
            text={buttonText}
            className={className}
          >
            {buttonIcon}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
