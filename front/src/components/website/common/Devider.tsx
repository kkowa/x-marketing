/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │                 Divider Component                   │
 * │                                                     │
 * │ A responsive divider component that displays        │
 * │ different divider images based on screen size.      │
 * │ It accepts large and small divider images and       │
 * │ renders them conditionally with appropriate         │
 * │ styling based on the viewport width.                │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */
import Image from "next/image";
import { StaticImageData } from "next/image";

interface DividerProps {
  largeSrc: string | StaticImageData;
  smallSrc: string | StaticImageData;
  alt: string;
  largeClassName?: string;
  smallClassName?: string;
}

const Divider = ({
  largeSrc,
  smallSrc,
  alt,
  largeClassName = "",
  smallClassName = "",
}: DividerProps) => {
  return (
    <>
      {/* Large divider for lg screens and up */}
      <div
        className={`pointer-events-none relative hidden w-full justify-center lg:flex ${largeClassName}`}
      >
        <Image
          src={largeSrc}
          alt={alt}
          className="z-10 h-auto w-[calc(100%+80px)] max-w-[calc(100%+80px)]"
          width={1920}
          height={300}
          sizes="100vw"
        />
      </div>

      {/* Small divider for md screens and down */}
      <div
        className={`xs:-mt-6 pointer-events-none relative z-10 hidden w-full justify-center sm:-mt-6 sm:flex md:-mt-8 md:flex lg:hidden ${smallClassName}`}
      >
        <Image
          src={smallSrc}
          alt={alt}
          className="h-auto w-[calc(100%+80px)] max-w-[calc(100%+80px)]"
          width={1920}
          height={300}
          sizes="100vw"
        />
      </div>
    </>
  );
};

export default Divider;

// usage:

// <Divider
// largeSrc={LargeDivider}
// smallSrc={SmallDivider}
// alt="Section divider"
// largeClassName="lg:-mt-38 xl:-mt-43"
// smallClassName="lg:-mt-43 xl:-mt-43 2xl:-mt-43"
// />
