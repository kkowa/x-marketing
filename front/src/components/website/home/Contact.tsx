/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │ Contact Section Component                           │
 * │                                                     │
 * │ This component renders the Contact section of the   │
 * │ website. It features a full-width background with   │
 * │ a semi-transparent overlay and decorative borders.  │
 * │                                                     │
 * │ The component displays a Header with the title      │
 * │ "Let's work with Us" and a descriptive text about   │
 * │ the company's services. It includes a "Know More"   │
 * │ button with a black arrow icon positioned in the    │
 * │ middle of the section on desktop views.             │
 * │                                                     │
 * │ The background uses absolute positioning with       │
 * │ negative top and bottom values to extend beyond     │
 * │ the component's bounds. It includes a centered      │
 * │ full-width background that spans the entire         │
 * │ viewport width, created using 100vw width and       │
 * │ CSS transform for horizontal centering.             │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */

//assets
import { ArrowUpIcon } from "public/icons/Icons";

//component
import Header from "@/components/website/common/Header";

const Contact = () => {
  return (
    <div className="relative">
      <div
        className="absolute -top-10 right-0 -bottom-10 left-0 border-y-2 border-y-[#635189] bg-[rgba(26,26,26,0.4)]"
        style={{ width: "100vw", left: "50%", transform: "translateX(-50%)" }}
      ></div>
      <div className="relative">
        <Header
          title="Let's work with Us"
          description={
            <>
              Mangcoding is a biggest company in Indonesia, who provides the
              services in
              <br />
              Development Website, Shopify and Wordpress help you to
            </>
          }
          buttonContainer={true}
          buttonText="Know More"
          buttonIcon={<ArrowUpIcon color="black" />}
          buttonPosition="middle"
          buttonSize="large"
        />
      </div>
    </div>
  );
};

export default Contact;
