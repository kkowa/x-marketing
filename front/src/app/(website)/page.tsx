"use client";

import Navbar from "@/components/website/common/Navbar";
import Footer from "@/components/website/common/Footer";

import Hero from "@/components/website/home/Hero";
import About from "@/components/website/home/About";
import Services from "@/components/website/home/Services";
import Stripe from "@/components/website/home/Stripe";
import Portfolio from "@/components/website/home/Portfolio";
import Testimonials from "@/components/website/home/Testimonials";
import Contact from "@/components/website/home/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stripe />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
