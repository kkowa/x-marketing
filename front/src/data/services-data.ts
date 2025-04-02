type ServiceHeader = {
  title: string;
  description: string;
  buttonText: string;
};

type ImagePosition = {
  className: string;
};

type Service = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  isLarge: boolean;
  imagePosition: ImagePosition;
};

type ServiceContent = {
  header: ServiceHeader;
  services: Service[];
  buttonText: string;
};

const serviceContent: ServiceContent = {
  header: {
    title: "Let's work together with our us",
    description:
      "help you to build website company that is modern, user friendly, good CEO, and Clean design",
    buttonText: "Get Started",
  },
  services: [
    {
      id: 1,
      title: "Website Dev",
      description:
        "Help you to build website company that is modern, user friendly, good CEO, and Clean design",
      bgColor: "#504CFF",
      isLarge: true,
      imagePosition: {
        className:
          "sm:-right-36 sm:block sm:w-[72%] md:w-[56%] lg:w-[71%] xl:w-[71%] 2xl:w-[71%]",
      },
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Help you to build website company that is modern, user friendly, good CEO, and Clean design",
      bgColor: "#151515",
      isLarge: false,
      imagePosition: {
        className:
          "sm:-right-12 sm:block sm:w-[57%] md:w-[46%] lg:w-[46%] xl:w-[46%] 2xl:w-[46%]",
      },
    },
    {
      id: 3,
      title: "Branding",
      description:
        "Help you to build website company that is modern, user friendly, good CEO, and Clean design",
      bgColor: "#151515",
      isLarge: false,
      imagePosition: {
        className:
          "sm:block sm:w-[94%] md:-right-40 md:w-[80%] lg:-right-36 lg:w-[94%] xl:w-[94%] 2xl:w-[94%]",
      },
    },
    {
      id: 4,
      title: "Shopify",
      description:
        "Help you to build website company that is modern, user friendly, good CEO, and Clean design",
      bgColor: "#854CFF",
      isLarge: true,
      imagePosition: {
        className:
          "sm:-right-18 sm:block sm:w-[60%] md:w-[52%] lg:w-[58%] xl:w-[58%] 2xl:w-[58%]",
      },
    },
  ],
  buttonText: "Start with us",
};

export default serviceContent;
