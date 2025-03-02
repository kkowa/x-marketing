import Link from "next/link";
import styles from "./Navbar.module.scss";
import {
  ButtonIcon,
  CompanyLogoIdeogram,
} from "../../../../public/icons/icons";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <CompanyLogoIdeogram />
        <div className={styles.logotype}>X Marketing</div>
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>

      <button className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium  rounded-[60px] group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-4 py-0.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-[60px] group-hover:bg-transparent group-hover:dark:bg-transparent">
          <div className={styles.button}>
            <p>Get Started</p>
            <ButtonIcon />
          </div>
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
