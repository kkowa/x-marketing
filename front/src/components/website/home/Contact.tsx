import { Button } from "@/components/ui/buttons/StandardButton";
import Header from "@/components/ui/Header";

import { ArrowUpCircleIcon } from "public/icons/Icons";

const Contact = () => {
  return (
    <div className="relative">
      <div
        className="absolute -top-10 -bottom-10 left-0 right-0 bg-[rgba(26,26,26,0.4)] border-y-2 border-y-[#635189]"
        style={{ width: "100vw", left: "50%", transform: "translateX(-50%)" }}
      ></div>
      <div className="relative">
        <Header
          title="Let's work with Us"
          description={
            <>
              Mangcoding is a biggest company in Indonesia, who provides the
              services in
              <br />
              Development Website, Shopify and Wordpress help you to
            </>
          }
          buttonContainer={false}
        />
        <div className="static 2xl:absolute xl:absolute lg:absolute md:static sm:static static 2xl:right-0 xl:right-0 lg:right-0 2xl:top-1/2 xl:top-1/2 lg:top-1/2 2xl:-translate-y-1/2 xl:-translate-y-1/2 lg:-translate-y-1/2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-6 sm:mt-6 mt-6 z-30 flex 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:flex sm:flex flex justify-center">
          <Button
            variant="outline"
            radius="full"
            text="Know More"
            className="2xl:w-full xl:w-full lg:w-full md:w-1/2 sm:w-1/2 w-1/2 2xl:h-12 xl:h-12 lg:h-12 md:h-12 sm:h-12 h-10 2xl:px-6 xl:px-6 lg:px-6 md:px-6 sm:px-6 px-4 text-black"
          >
            <ArrowUpCircleIcon color="black" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
