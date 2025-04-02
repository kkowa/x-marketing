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

// Assets
import { ArrowUpIcon } from "public/icons/Icons";
import SVGDevider1 from "public/img/svg/about-devider-large.svg";
import SVGDevider2 from "public/img/svg/about-devider-small.svg";

// Components
import Header from "@/components/website/common/Header";
import DeviderLarge from "@/components/website/common/deviders/DeviderLarge";
import DeviderSmall from "@/components/website/common/deviders/DeveiderSmall";

// Data
import aboutContent from "@/data/about-data";

const About = () => {
  const { header } = aboutContent;

  return (
    <>
      <Header
        title={
          <>
            {header.title.split("developing")[0]} <br />
            developing{header.title.split("developing")[1]}
          </>
        }
        description={
          <>
            {header.description.split("and")[0]}
            <br className="hidden md:block" /> and
            {header.description.split("and")[1]}
          </>
        }
        buttonContainer={true}
        buttonText={header.buttonText}
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
