import type { Metadata } from "next";
import styles from "@/styles/Layout.module.scss";
import Nav from "@/components/custom-ui/Navbar/Navbar";

export const metadata: Metadata = {
  title: "X Marketing",
  description: "Welcome to our marketing website!",
};

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout__container">
      <Nav />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
