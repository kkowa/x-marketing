type ContactHeader = {
  title: string;
  description: string;
  buttonText: string;
};

type ContactContent = {
  header: ContactHeader;
};

const contactContent: ContactContent = {
  header: {
    title: "Let's work with Us",
    description:
      "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress help you to",
    buttonText: "Know More",
  },
};

export default contactContent;
