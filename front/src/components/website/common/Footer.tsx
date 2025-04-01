import {
  CompanyLogoIdeogram,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "public/icons/Icons";

const Footer = () => {
  return (
    <div className=" bg-[#1A1A1A] bg-opacity-40 text-white ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between py-[80px]">
          <div className="w-1/2">
            <div className="flex mb-[16px]">
              <CompanyLogoIdeogram />
              <div className="ml-4 text-lg text-white">X Marketing</div>
            </div>
            <p className="title-color">
              Companies that can help you in developing your <br /> company for
              the future
            </p>
          </div>
          <div className="w-1/4">
            <h3 className="mb-[24px]">Services</h3>
            <div>
              <h4 className="mb-[16px]">Web Development</h4>
              <h4 className="mb-[16px]">UI/UX Designer</h4>
              <h4 className="mb-[16px]">Branding</h4>
              <h4>Shopify</h4>
            </div>
          </div>
          <div className="w-1/4">
            <h3 className="mb-[24px]">Business Features</h3>
            <div>
              <h4 className="mb-[16px]">Data-Based Chatbot Training</h4>
              <h4 className="mb-[16px]">Model Fine-Tuning</h4>
              <h4>Sales & Customer Service Smart Agents</h4>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-[30px]">
          <p className="w-1/3 text-[14px]">
            © 2023 Mangcoding. All rights reserved.
          </p>
          <div className="w-1/3 flex justify-between gap-6">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookie Policy</div>
          </div>
          <div className="w-1/3 flex justify-end gap-[16px]">
            <div className="w-[20px] h-[20px]">
              <InstagramIcon />
            </div>
            <div className="w-[20px] h-[20px]">
              <WhatsAppIcon />
            </div>
            <div className="w-[20px] h-[20px]">
              <LinkedInIcon />
            </div>
            <div className="w-[20px] h-[20px]">
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
