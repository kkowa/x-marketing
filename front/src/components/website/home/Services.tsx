/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │ Services Component                                  │
 * │                                                     │
 * │ This component displays the services section of     │
 * │ the website featuring a header, service cards,      │
 * │ and a logo marquee. The component is optimized      │
 * │ for performance with proper image loading and       │
 * │ responsive design across various screen sizes.      │
 * │                                                     │
 * │ It uses smaller, reusable components including      │
 * │ ServiceCard and MarqueeSection to improve code      │
 * │ maintainability. Service data is stored             │
 * │ separately for better organization.                 │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */

import { useMemo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Components
import DeviderLarge from "@/components/website/common/deviders/DeviderLarge";
import Header from "@/components/website/common/Header";
import ServiceCard from "@/components/ui/cards/ServiceCard";

// Dynamically import Marquee for better performance
const Marquee = dynamic(() => import("@/components/animations/Marquee"), {
  ssr: true,
  loading: () => <div className="h-20"></div>,
});

// Icons
import { ArrowUpCircleIcon } from "public/icons/Icons";

// Service Assets
import ServiceIcon1 from "public/img/svg/services/service-icon-1.svg";
import ServiceIcon2 from "public/img/svg/services/service-icon-2.svg";
import ServiceIcon3 from "public/img/svg/services/service-icon-3.svg";
import ServiceIcon4 from "public/img/svg/services/service-icon-4.svg";
import ServiceImg1 from "public/img/svg/services/service-img-1.svg";
import ServiceImg2 from "public/img/svg/services/service-img-2.svg";
import ServiceImg3 from "public/img/svg/services/service-img-3.svg";
import ServiceImg4 from "public/img/svg/services/service-img-4.svg";

// Marquee Assets
import MarqueeBackground1 from "public/img/svg/marquee-background-1.svg";
import MarqueeBackground2 from "public/img/svg/marquee-background-2.svg";
import Logo1 from "public/img/svg/logo1.svg";
import Logo2 from "public/img/svg/logo2.svg";
import Logo3 from "public/img/svg/logo3.svg";
import SVGDevider1 from "public/img/svg/services-devider.svg";

// Data
import serviceContent from "@/data/services-data";

const serviceIcons = [ServiceIcon1, ServiceIcon2, ServiceIcon3, ServiceIcon4];
const serviceImages = [ServiceImg1, ServiceImg2, ServiceImg3, ServiceImg4];
const logoImages = [Logo1, Logo2, Logo3];

const Services = () => {
  const { services, buttonText } = serviceContent;

  // Memoize service cards to prevent unnecessary re-renders
  const serviceCards = useMemo(() => {
    return services.map((service, index) => (
      <ServiceCard
        key={service.title || index}
        bgColor={service.bgColor}
        isLarge={service.isLarge}
        icon={serviceIcons[index]}
        iconAlt={`${service.title} icon`}
        title={service.title}
        description={service.description}
        buttonText={buttonText}
        image={serviceImages[index]}
        imageAlt={`${service.title} illustration`}
        imagePosition={service.imagePosition}
      />
    ));
  }, [services, buttonText]);

  return (
    <>
      <div className="mt-20 sm:-mt-56 md:-mt-46 lg:-mt-86 xl:-mt-94">
        <Header
          title={
            <>
              Let&apos;s work together <br className="hidden lg:block" /> with
              our us
            </>
          }
          description={
            <>
              help you to build website company that is modern, user friendly,
              <br className="hidden lg:block" />
              good CEO, and Clean design
            </>
          }
          buttonContainer={true}
          buttonText="Get Started"
          buttonIcon={<ArrowUpCircleIcon color="black" />}
          buttonPosition="bottom"
          buttonSize="small"
        />
      </div>

      <div id="service-cards" className="pt-16">
        <div className="w-full">
          {/* First row */}
          <div className="mb-6 flex w-full flex-col gap-6 lg:flex-row">
            {serviceCards.slice(0, 2)}
          </div>

          {/* Second row */}
          <div className="mb-6 flex w-full flex-col gap-6 lg:flex-row">
            {serviceCards.slice(2, 4)}
          </div>
        </div>
      </div>

      {/* Divider and Marquee Section */}
      <div className="relative">
        <div className="pointer-events-none relative left-0 -mt-6 flex w-full justify-center">
          <div className="xs:mt-6 absolute right-0 left-[50%] z-50 mt-4 h-auto w-screen -translate-x-1/2 transform sm:mt-8 md:mt-11 lg:mt-15 xl:mt-14">
            <Image
              src={MarqueeBackground1}
              className="w-full"
              alt="Marquee background"
              width={1920}
              height={300}
              sizes="100vw"
            />
            <Image
              src={MarqueeBackground2}
              className="absolute top-0 left-0 w-full"
              alt="Marquee overlay background"
              width={1920}
              height={300}
              sizes="100vw"
            />

            <div className="relative -mt-40 rotate-2">
              <Marquee
                images={logoImages}
                showText={false}
                imageSize={60}
                backgroundColor="transparent"
                height="80px"
                speed={8}
                gap="30px"
                direction="left"
              />
            </div>
          </div>

          <div className="relative z-10">
            <DeviderLarge
              src={SVGDevider1}
              alt="divider on large screen"
              className="w-[calc(100%+60px)] lg:h-auto lg:max-w-[calc(100%+60px)] xl:h-auto xl:max-w-[calc(100%+60px)] 2xl:h-auto 2xl:max-w-[calc(100%+60px)]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
