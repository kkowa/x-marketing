//compoments
import Header from "@/components/website/common/Header";
import DeviderLarge from "@/components/website/common/deviders/DeviderLarge";
import DeviderSmall from "@/components/website/common/deviders/DeveiderSmall";

//assets
import { ArrowUpIcon } from "public/icons/Icons";
import SVGDevider1 from "public/img/svg/about-devider-large.svg";
import SVGDevider2 from "public/img/svg/about-devider-small.svg";

const About = () => {
  return (
    <>
      <Header
        title={
          <>
            Companies that can help you in <br />
            developing your company for the future
          </>
        }
        description={
          <>
            Work in the IT field includes Web Design, UI/UX Design, Branding
            <br className="hidden md:block" /> and Shopify Development
          </>
        }
        buttonContainer={true}
        buttonText="Know More"
        buttonIcon={<ArrowUpIcon />}
        buttonPosition="top"
        buttonSize="large"
      />
      <DeviderLarge
        src={SVGDevider1}
        alt={"divider on large screen"}
        className="lg:-mt-38 xl:-mt-43"
      />
      <DeviderSmall
        src={SVGDevider2}
        alt={"divider on large screen"}
        className="lg:-mt-43 xl:-mt-43 2xl:-mt-43"
      />
    </>
  );
};

export default About;
