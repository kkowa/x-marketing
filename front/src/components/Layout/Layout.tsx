import AnimatedBackground from "../Background/AnimatedBackground";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AnimatedBackground />
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
