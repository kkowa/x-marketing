import Image from "next/image";

import About from "@/components/website/home/About";
import Services from "@/components/website/home/Services";
import Portfolio from "@/components/website/home/Portfolio";
import Testimonials from "@/components/website/home/Testimonials";
import Contact from "@/components/website/home/Contact";

import Blob1 from "public/img/background/blobs/blob-1.svg";
import Blob2 from "public/img/background/blobs/blob-2.svg";
import Blob3 from "public/img/background/blobs/blob-3.svg";
import Blob4 from "public/img/background/blobs/blob-4.svg";
import Blob5 from "public/img/background/blobs/blob-5.svg";
import Blob6 from "public/img/background/blobs/blob-6.svg";
import Blob7 from "public/img/background/blobs/blob-7.svg";
import Blob8 from "public/img/background/blobs/blob-8.svg";
import Blob9 from "public/img/background/blobs/blob-9.svg";

import BacgroundIcon from "public/img/background/bg-icon.svg";

export default function Home() {
  return (
    <>
      <div className="relative">
        <About />
        <div className="relative z-20">
          <Services />
          <Image
            src={Blob1}
            alt="blob-1"
            className="absolute -top-1/4 right-2/3"
          />
          <Image
            src={Blob2}
            alt="blob-1"
            className="absolute top-1/16 -right-2/3"
          />
          <Image
            src={Blob3}
            alt="blob-1"
            className="absolute top-1/4 right-2/3"
          />
        </div>
        <div className="relative z-20">
          <Portfolio />
          <Image
            src={Blob4}
            alt="blob-4"
            className="absolute -top-1/8 right-2/3"
          />
          <Image
            src={Blob5}
            alt="blob-5"
            className="absolute top-1/4 -right-2/3"
          />
        </div>
        <div className="relative z-20">
          <Testimonials />
          <Image
            src={Blob6}
            alt="blob-6"
            className="absolute -top-1/3 right-2/3"
          />
          <Image
            src={Blob7}
            alt="blob-7"
            className="absolute top-1/16 -right-2/3"
          />
          <Image
            src={BacgroundIcon}
            alt="background-icon"
            className="absolute top-1/14 -right-1/3"
          />
        </div>
        <div className="relative ">
          <Contact />
          <Image
            src={Blob8}
            alt="blob-8"
            className="absolute -top-60 right-2/3"
          />
        </div>
      </div>
    </>
  );
}
