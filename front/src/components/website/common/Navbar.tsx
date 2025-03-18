import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  ArrowUpCircleIcon,
  CompanyLogoIdeogram,
} from "../../../../public/icons/icons";

const styles = {
  container: "fixed top-0 left-0 right-0 bg-[#020103] shadow-md py-4 px-6 z-50",
  wrapper: "max-w-7xl mx-auto flex justify-between items-center",
  logo: "flex items-center",
  logoText: "ml-4 text-lg text-white",
  links: "hidden md:flex space-x-8",
  link: "text-white hover:text-blue-500 transition-colors",
};

const Navbar = () => {
  return (
    <header className={styles.container}>
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
        <Button variant="gradient" text="Get Started">
          <ArrowUpCircleIcon />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
