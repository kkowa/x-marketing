/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │ Footer Component                                    │
 * │                                                     │
 * │ A responsive footer component that displays company │
 * │ information, service listings, business features,   │
 * │ copyright notice, policy links, and social media    │
 * │ icons.                                              │
 * │                                                     │
 * │ This component uses data from a separate file for   │
 * │ easier content management and updates.              │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */

import React from "react";
import {
  CompanyLogoIdeogram,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "public/icons/Icons";

// Import footer data and types
import footerContent, { SocialIconType } from "@/data/footer-data";

const Footer: React.FC = () => {
  const {
    company,
    services,
    businessFeatures,
    copyright,
    policies,
    socialIcons,
  } = footerContent;

  // Render social icons
  const renderSocialIcons = () => {
    const IconComponents: Record<SocialIconType, React.ComponentType> = {
      instagram: InstagramIcon,
      whatsapp: WhatsAppIcon,
      linkedin: LinkedInIcon,
      twitter: TwitterIcon,
    };

    return socialIcons.map((icon) => {
      const IconComponent = IconComponents[icon.type];
      return (
        <div key={icon.type} className="h-[20px] w-[20px]">
          <IconComponent />
        </div>
      );
    });
  };

  return (
    <div className="z-50 bg-[rgba(26,26,26,0.4)] text-white">
      <div className="mx-auto max-w-6xl">
        {/* Top footer section */}
        <div className="flex justify-between py-[80px]">
          {/* Company info */}
          <div className="w-1/2">
            <div className="mb-[16px] flex">
              <CompanyLogoIdeogram />
              <div className="ml-4 text-lg text-white">{company.name}</div>
            </div>
            <p className="text-white">
              {company.description.split("<br>")[0]} <br />
              {company.description.split("<br>")[1]}
            </p>
          </div>

          {/* Services */}
          <div className="w-1/4">
            <h3 className="mb-[24px]">{services.title}</h3>
            <div>
              {services.items.map((service, index) => (
                <h4
                  key={index}
                  className={
                    index < services.items.length - 1 ? "mb-[16px]" : ""
                  }
                >
                  {service}
                </h4>
              ))}
            </div>
          </div>

          {/* Business Features */}
          <div className="w-1/4">
            <h3 className="mb-[24px]">{businessFeatures.title}</h3>
            <div>
              {businessFeatures.items.map((feature, index) => (
                <h4
                  key={index}
                  className={
                    index < businessFeatures.items.length - 1 ? "mb-[16px]" : ""
                  }
                >
                  {feature}
                </h4>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom footer section */}
        <div className="flex justify-between py-[30px]">
          <p className="w-1/3 text-[14px]">{copyright}</p>

          <div className="flex w-1/3 justify-between gap-6">
            {policies.map((policy, index) => (
              <div key={index}>{policy}</div>
            ))}
          </div>

          <div className="flex w-1/3 justify-end gap-[16px]">
            {renderSocialIcons()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
