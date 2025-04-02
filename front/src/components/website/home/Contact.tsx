import { Button } from "@/components/ui/buttons/StandardButton";
import Header from "@/components/website/common/Header";

import { ArrowUpCircleIcon } from "public/icons/Icons";

const Contact = () => {
  return (
    <div className="relative">
      <div
        className="absolute -top-10 right-0 -bottom-10 left-0 border-y-2 border-y-[#635189] bg-[rgba(26,26,26,0.4)]"
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
        <div className="static z-30 mt-6 flex justify-center sm:static sm:mt-6 sm:flex md:static md:mt-6 md:flex lg:absolute lg:top-1/2 lg:right-0 lg:mt-0 lg:w-1/4 lg:-translate-y-1/2 xl:absolute xl:top-1/2 xl:right-0 xl:mt-0 xl:w-1/4 xl:-translate-y-1/2 2xl:absolute 2xl:top-1/2 2xl:right-0 2xl:mt-0 2xl:w-1/4 2xl:-translate-y-1/2">
          <Button
            variant="outline"
            radius="full"
            text="Know More"
            className="h-10 w-1/2 px-4 text-black sm:h-12 sm:w-1/2 sm:px-6 md:h-12 md:w-1/2 md:px-6 lg:h-12 lg:w-full lg:px-6 xl:h-12 xl:w-full xl:px-6 2xl:h-12 2xl:w-full 2xl:px-6"
          >
            <ArrowUpCircleIcon color="black" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
