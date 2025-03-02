import Link from "next/link";
import styles from "./Navbar.module.scss";
import { CompanyLogoIdeogram } from "../../../../public/icons/icons";
import { Button } from "@/components/ui/button";

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
      <div className="auth">
        <button className={styles.signin__button}>Sign In</button>
        <button className={styles.signup__button}>Sign Up</button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </nav>
  );
};

export default Navbar;
