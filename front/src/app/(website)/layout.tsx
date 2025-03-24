import type { Metadata } from "next";
import "@/app/globals.css";

import React from "react";
import { ReactNode } from "react";
import Footer from "@/components/website/common/Footer";
import Navbar from "@/components/website/common/Navbar";
// import Hero from "@/components/website/home/Hero";

export const metadata: Metadata = {
  title: "X Marketing",
  description: "Welcome to our marketing website!",
};

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
function Container(props: ContainerProps) {
  const { children, className = "" } = props;
  return (
    <div className="w-full flex justify-center">
      <div className={`w-full mx-auto max-w-7xl py-10 px-16 ${className}`}>
        {children}
      </div>
    </div>
  );
}
export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 bg-[#020103] z-50">
        <Navbar />
      </header>
      <main>
        {/* <Hero /> */}
        <Container>{children}</Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
