/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │ DeviderLarge Component                              │
 * │                                                     │
 * │ A component that renders a divider image for        │
 * │ 2xl-lg sizes. It accepts an imported image as a     │
 * │ prop and displays it with responsive sizing while   │
 * │ maintaining the original image's aspect ratio.      │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */
import Image from "next/image";
import { StaticImageData } from "next/image";

interface DeviderLargeProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}

const DeviderLarge = ({ src, alt, className = "" }: DeviderLargeProps) => {
  return (
    <div
      className={`pointer-events-none relative hidden w-full justify-center lg:flex ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        className="z-10 h-auto w-[calc(100%+80px)] max-w-[calc(100%+80px)]"
      />
    </div>
  );
};

export default DeviderLarge;
