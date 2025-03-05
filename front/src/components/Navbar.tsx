import Link from "next/link";
import { ButtonIcon, CompanyLogoIdeogram } from "../../public/icons/icons";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#020103] shadow-md py-4 px-2 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <CompanyLogoIdeogram />
          <div className="ml-4 text-lg text-white">X Marketing</div>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link
            className="text-white hover:text-blue-500 transition-colors"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-white hover:text-blue-500 transition-colors"
            href="/about"
          >
            Services
          </Link>
          <Link
            className="text-white hover:text-blue-500 transition-colors"
            href="/about"
          >
            Portfolio
          </Link>
          <Link
            className="text-white hover:text-blue-500 transition-colors"
            href="/about"
          >
            Contact
          </Link>
        </nav>
        <button className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium  rounded-[60px] group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-4 py-0.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-[60px] group-hover:bg-transparent group-hover:dark:bg-transparent">
            <div className="flex w-[141px] h-[35px] justify-center items-center">
              <p className="mr-[10px] text-white">Get Started</p>
              <ButtonIcon />
            </div>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
