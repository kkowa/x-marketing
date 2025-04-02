/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │  DeviderSmall Component                             │
 * │                                                     │
 * │  A component that renders a divider image for       │
 * │  md-xs sizes. It accepts an imported image as a     │
 * │  prop and displays it with responsive sizing while  │
 * │  maintaining the original image's aspect ratio.     │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */
import Image from "next/image";

interface DeviderLargeProps {
  src: string;
  alt: string;
  className?: string; //probably used for positioning
}

const DeviderSmall = ({ src, alt, className = "" }: DeviderLargeProps) => {
  return (
    <div
      className={`xs:-mt-6 2xl: pointer-events-none relative z-10 -mt-6 hidden w-full justify-center sm:-mt-6 sm:flex md:-mt-8 md:flex lg:hidden xl:hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        className="h-auto w-[calc(100%+80px)] max-w-[calc(100%+80px)] sm:h-auto sm:max-w-[calc(100%+80px)] md:h-auto md:max-w-[calc(100%+80px)]"
      />
    </div>
  );
};

export default DeviderSmall;
