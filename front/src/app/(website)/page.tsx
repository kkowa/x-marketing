import About from "@/components/website/home/About";
import Services from "@/components/website/home/Services";
import Stripe from "@/components/website/home/Stripe";
import Portfolio from "@/components/website/home/Portfolio";
import Testimonials from "@/components/website/home/Testimonials";
import Contact from "@/components/website/home/Contact";

export default function Home() {
  return (
    <>
      <div className="relative">
        <About />
        <div className="relative z-20">
          <Services />
        </div>
      </div>
      <Stripe />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
}
