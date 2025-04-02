type MenuItems = {
  about: string;
  services: string;
  portfolio: string;
  contact: string;
};

type NavbarContent = {
  companyName: string;
  menuItems: MenuItems;
  buttonText: string;
};

const navbarContent: NavbarContent = {
  companyName: "X Marketing",
  menuItems: {
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
  },
  buttonText: "Get Started",
};

export default navbarContent;
