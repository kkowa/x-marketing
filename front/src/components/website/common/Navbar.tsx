/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │ Navbar Component                                    │
 * │                                                     │
 * │ A responsive navigation bar that displays the       │
 * │ company logo, navigation links, and a call-to-      │
 * │ action button. The navigation links are hidden      │
 * │ on mobile screens and displayed on larger screens.  │
 * │                                                     │
 * │ The component imports content data from a separate  │
 * │ file for easier maintenance and updates.            │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */
import React from "react";
import Link from "next/link";
import { GradientButton } from "@/components/ui/buttons/GradientButton";
import { ArrowUpCircleIcon, CompanyLogoIdeogram } from "public/icons/Icons";

// Import content
import navbarContent from "@/data/navbar-data";

const styles = {
  wrapper: "max-w-7xl mx-auto flex justify-between items-center py-4 px-6",
  logo: "flex items-center",
  logoText: "ml-4 text-lg text-white",
  links: "hidden md:flex space-x-8 ml-12",
  link: "text-white hover:text-blue-500 transition-colors",
};

const Navbar: React.FC = () => {
  const { companyName, menuItems, buttonText } = navbarContent;

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <CompanyLogoIdeogram />
        <div className={styles.logoText}>{companyName}</div>
      </div>

      <nav className={styles.links}>
        <Link className={styles.link} href="/about">
          {menuItems.about}
        </Link>
        <Link className={styles.link} href="/services">
          {menuItems.services}
        </Link>
        <Link className={styles.link} href="/portfolio">
          {menuItems.portfolio}
        </Link>
        <Link className={styles.link} href="/contact">
          {menuItems.contact}
        </Link>
      </nav>

      <GradientButton text={buttonText}>
        <ArrowUpCircleIcon />
      </GradientButton>
    </div>
  );
};

export default Navbar;
