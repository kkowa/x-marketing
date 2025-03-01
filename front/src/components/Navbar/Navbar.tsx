import Link from "next/link";
import styles from "./Navbar.module.scss";
import { CompanyLogoIdeogram } from "../../../public/icons/icons";

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
      <button className={styles.button}>Get Started</button>
    </nav>
  );
};

export default Navbar;
