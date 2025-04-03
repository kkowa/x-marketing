/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │                 Header Component                    │
 * │                                                     │
 * │ A flexible header component that displays a title,  │
 * │ description, and an optional button. The button     │
 * │ position and size are configurable through props.   │
 * │                                                     │
 * │ The component is responsive, with different layouts │
 * │ for mobile and desktop viewports. On desktop, the   │
 * │ button can be positioned at the top, middle, or     │
 * │ bottom of the header. Button sizes can be set to    │
 * │ small or large.                                     │
 * │                                                     │
 * │ The component uses tailwind classes for styling     │
 * │ and accepts React nodes for custom rendering of     │
 * │ title, description, and button icon content.        │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */

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
      className: "h-12 w-full px-6 py-3",
    },
    large: {
      container: "w-1/2 lg:w-1/4",
      size: "lg" as ButtonSizeType,
      className: "h-12 w-full px-6 py-3",
    },
  };

  return sizes[size as keyof typeof sizes] || sizes.large;
};

type ButtonSizeType = NonNullable<ButtonProps["size"]>;

type HeaderProps = {
  title: string | ReactNode;
  description: string | ReactNode;
  buttonContainer?: boolean;
  buttonText?: string;
  buttonIcon?: ReactNode;
  buttonPosition?: "top" | "middle" | "bottom";
  buttonSize?: "small" | "large";
};

const Header = ({
  title,
  description,
  buttonContainer,
  buttonText,
  buttonIcon,
  buttonPosition = "top",
  buttonSize = "large",
}: HeaderProps) => {
  const { container, size, className } = getButtonSize(buttonSize);

  return (
    <div className="relative flex w-full flex-col items-center text-black lg:flex-row lg:items-end lg:justify-between">
      <div className="w-full pb-[min(12%,50px)] text-center lg:pb-0 lg:text-left">
        <div className="title-color relative overflow-hidden text-xl leading-[1.2] sm:text-4xl lg:text-5xl xl:text-6xl">
          {title}
        </div>
        <div className="relative z-31 mt-4 overflow-hidden text-xs leading-[1.5] text-ellipsis whitespace-nowrap text-white sm:text-sm lg:text-base">
          {description}
        </div>
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
