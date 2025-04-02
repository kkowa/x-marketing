/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │ DeviderSmall Component                              │
 * │                                                     │
 * │ A component that renders a divider image for        │
 * │ md-xs sizes. It accepts an imported image as a      │
 * │ prop and displays it with responsive sizing while   │
 * │ maintaining the original image's aspect ratio.      │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */
import Image from "next/image";
import { StaticImageData } from "next/image";

interface DeviderSmallProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}

const DeviderSmall = ({ src, alt, className = "" }: DeviderSmallProps) => {
  return (
    <div
      className={`xs:-mt-6 pointer-events-none relative z-10 hidden w-full justify-center sm:-mt-6 sm:flex md:-mt-8 md:flex lg:hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        className="h-auto w-[calc(100%+80px)] max-w-[calc(100%+80px)]"
      />
    </div>
  );
};

export default DeviderSmall;
