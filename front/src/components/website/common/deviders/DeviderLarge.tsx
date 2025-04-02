/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │  DeviderLarge Component                             │
 * │                                                     │
 * │  A component that renders a divider image for       │
 * │  2xl-lg sizes. It accepts an imported image as a    │
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

const DeviderLarge = ({ src, alt, className = "" }: DeviderLargeProps) => {
  return (
    <div
      className={`xs:hidden pointer-events-none relative hidden w-full justify-center sm:hidden md:hidden lg:flex xl:flex 2xl:flex ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        className="z-10 w-[calc(100%+80px)] lg:h-auto lg:max-w-[calc(100%+80px)] xl:h-auto xl:max-w-[calc(100%+80px)] 2xl:h-auto 2xl:max-w-[calc(100%+80px)]"
      />
    </div>
  );
};

export default DeviderLarge;
