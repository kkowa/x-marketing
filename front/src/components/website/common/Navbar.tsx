/**
 * ┌─────────────────────────────────────────────────────┐
 * │                                                     │
 * │                Navbar Component                     │
 * │                                                     │
 * │ A responsive navigation bar that displays the       │
 * │ company logo, navigation links, and a call-to-      │
 * │ action button. The navigation links are hidden      │
 * │ on mobile screens and displayed as a burger menu.   │
 * │                                                     │
 * │ The component imports content data from a separate  │
 * │ file for easier maintenance and updates.            │
 * │                                                     │
 * └─────────────────────────────────────────────────────┘
 */

"use client";
import React, { useState } from "react";
import Link from "next/link";
//Assets
import { ArrowUpCircleIcon, CompanyLogoIdeogram } from "public/icons/Icons";
// Components
import { GradientButton } from "@/components/ui/buttons/GradientButton";
// Data
import navbarContent from "@/data/navbar-data";

const Navbar: React.FC = () => {
  const { companyName, menuItems, buttonText } = navbarContent;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <CompanyLogoIdeogram />
        <div className="ml-4 text-lg text-white">{companyName}</div>
      </div>

      {/* Desktop Navigation */}
      <nav className="ml-12 hidden space-x-8 md:flex">
        <Link
          className="text-white transition-colors hover:text-blue-500"
          href="/about"
        >
          {menuItems.about}
        </Link>
        <Link
          className="text-white transition-colors hover:text-blue-500"
          href="/services"
        >
          {menuItems.services}
        </Link>
        <Link
          className="text-white transition-colors hover:text-blue-500"
          href="/portfolio"
        >
          {menuItems.portfolio}
        </Link>
        <Link
          className="text-white transition-colors hover:text-blue-500"
          href="/contact"
        >
          {menuItems.contact}
        </Link>
      </nav>

      {/* Mobile Burger Menu Button */}
      <button
        className="z-50 text-white focus:outline-none md:hidden"
        onClick={toggleMobileMenu}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-64 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Semi-transparent background */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Content that remains fully visible */}
        <div className="relative z-10 mt-16 flex flex-col space-y-6 p-6">
          <Link
            className="text-lg font-medium text-white transition-colors hover:text-blue-500"
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
          >
            {menuItems.about}
          </Link>
          <Link
            className="text-lg font-medium text-white transition-colors hover:text-blue-500"
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
          >
            {menuItems.services}
          </Link>
          <Link
            className="text-lg font-medium text-white transition-colors hover:text-blue-500"
            href="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
          >
            {menuItems.portfolio}
          </Link>
          <Link
            className="text-lg font-medium text-white transition-colors hover:text-blue-500"
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            {menuItems.contact}
          </Link>

          <div className="pt-6">
            <GradientButton text={buttonText}>
              <ArrowUpCircleIcon />
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden md:block">
        <GradientButton text={buttonText} className="bg-white">
          <ArrowUpCircleIcon />
        </GradientButton>
      </div>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-90"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
