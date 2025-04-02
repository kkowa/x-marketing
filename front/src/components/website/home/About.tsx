/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │ About Section Component                             │
 * │                                                     │
 * │ This component renders the About section of the     │
 * │ website. It displays a header with a title,         │
 * │ description, and a "Know More" button with an       │
 * │ arrow icon. The section includes decorative         │
 * │ dividers that are responsive to different screen    │
 * │ sizes.                                              │
 * │                                                     │
 * │ The component imports SVG dividers and displays     │
 * │ them conditionally based on viewport size. The      │
 * │ large divider appears on desktop screens while      │
 * │ the small divider is shown on mobile devices.       │
 * │                                                     │
 * │ The negative margin classes on the dividers         │
 * │ create an overlapping visual effect that varies     │
 * │ across different breakpoints.                       │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */

//assets
import { ArrowUpIcon } from "public/icons/Icons";
import SVGDevider1 from "public/img/svg/about-devider-large.svg";
import SVGDevider2 from "public/img/svg/about-devider-small.svg";

//compoments
import Header from "@/components/website/common/Header";
import DeviderLarge from "@/components/website/common/deviders/DeviderLarge";
import DeviderSmall from "@/components/website/common/deviders/DeveiderSmall";

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
