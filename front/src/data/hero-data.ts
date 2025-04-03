export type SocialIconType = "instagram" | "whatsapp" | "linkedin" | "twitter";

import {
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "public/icons/Icons";

export const socialIcons: Record<SocialIconType, React.FC> = {
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
};

// Hero content data
export const heroContent = {
  title: "Amazing website creation with Bantu agency",
  description:
    "help you to build website company that is modern, user friendly, good CEO, and Clean design",
  button: "Get Started",
  socialIcons: [
    { type: "instagram" },
    { type: "whatsapp" },
    { type: "linkedin" },
    { type: "twitter" },
  ] as const,
};

export default heroContent;
