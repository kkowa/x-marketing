import Image from "next/image";
import SVGDevider1 from "public/img/svg/about-devider-large.svg";
import SVGDevider2 from "public/img/svg/about-devider-small.svg";

const deviderStyles = {
  SVGDeviderWrapper1:
    "absolute hidden 2xl:flex xl:flex lg:flex 2xl:top-8 xl:top-8 lg:top-8 left-0 w-full justify-center z-10 pointer-events-none",
  SVGDevider1:
    "w-[calc(100%+60px)] 2xl:max-w-[calc(100%+60px)] xl:max-w-[calc(100%+60px)] lg:max-w-[calc(100%+60px)] 2xl:h-auto xl:h-auto lg:h-auto",
  SVGDeviderWrapper2:
    "absolute flex md:flex sm:flex top-[calc(100%-25px)] left-0 w-full justify-center z-10 pointer-events-none lg:hidden xl:hidden 2xl:hidden",
  SVGDevider2:
    "w-[calc(100%+60px)] max-w-[calc(100%+60px)] md:max-w-[calc(100%+60px)] sm:max-w-[calc(100%+60px)] h-auto md:h-auto sm:h-auto",
};

export const Devider1Large = () => {
  return (
    <div className={deviderStyles.SVGDeviderWrapper1}>
      <Image
        src={SVGDevider1}
        className={deviderStyles.SVGDevider1}
        alt="divider on large screen"
      />
    </div>
  );
};

export const Devider1Small = () => {
  return (
    <div className={deviderStyles.SVGDeviderWrapper2}>
      <Image
        src={SVGDevider2}
        className={deviderStyles.SVGDevider2}
        alt="divider on small screen"
      />
    </div>
  );
};
