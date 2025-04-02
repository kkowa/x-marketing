type AboutHeader = {
  title: string;
  description: string;
  buttonText: string;
};

type AboutContent = {
  header: AboutHeader;
};

const aboutContent: AboutContent = {
  header: {
    title:
      "Companies that can help you in developing your company for the future",
    description:
      "Work in the IT field includes Web Design, UI/UX Design, Branding and Shopify Development",
    buttonText: "Know More",
  },
};

export default aboutContent;
