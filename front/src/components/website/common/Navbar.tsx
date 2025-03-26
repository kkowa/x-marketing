import Link from "next/link";

import { GradientButton } from "@/components/ui/buttons/GradientButton";

import { ArrowUpCircleIcon, CompanyLogoIdeogram } from "public/icons/Icons";

const styles = {
  wrapper: "max-w-7xl mx-auto flex justify-between items-center py-4 px-6",
  logo: "flex items-center",
  logoText: "ml-4 text-lg text-white",
  links: "hidden md:flex space-x-8",
  link: "text-white hover:text-blue-500 transition-colors",
};

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <CompanyLogoIdeogram />
        <div className={styles.logoText}>X Marketing</div>
      </div>

      <nav className={styles.links}>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <Link className={styles.link} href="/about">
          Services
        </Link>
        <Link className={styles.link} href="/about">
          Portfolio
        </Link>
        <Link className={styles.link} href="/about">
          Contact
        </Link>
      </nav>
      <GradientButton text="Get Started">
        <ArrowUpCircleIcon />
      </GradientButton>
    </div>
  );
};

export default Navbar;
