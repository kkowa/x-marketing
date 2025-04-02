export type SocialIconType = "instagram" | "whatsapp" | "linkedin" | "twitter";

type SocialIcon = {
  type: SocialIconType;
};

type CompanyInfo = {
  name: string;
  description: string;
};

type ContentSection = {
  title: string;
  items: string[];
};

type FooterContent = {
  company: CompanyInfo;
  services: ContentSection;
  businessFeatures: ContentSection;
  copyright: string;
  policies: string[];
  socialIcons: SocialIcon[];
};

const footerContent: FooterContent = {
  company: {
    name: "X Marketing",
    description:
      "Companies that can help you in developing your<br>company for the future",
  },
  services: {
    title: "Services",
    items: ["Web Development", "UI/UX Designer", "Branding", "Shopify"],
  },
  businessFeatures: {
    title: "Business Features",
    items: [
      "Data-Based Chatbot Training",
      "Model Fine-Tuning",
      "Sales & Customer Service Smart Agents",
    ],
  },
  copyright: "© 2023 Mangcoding. All rights reserved.",
  policies: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  socialIcons: [
    { type: "instagram" },
    { type: "whatsapp" },
    { type: "linkedin" },
    { type: "twitter" },
  ],
};

export default footerContent;
