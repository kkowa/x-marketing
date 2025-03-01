import styles from "@/styles/Layout.module.scss";
import type { Metadata } from "next";
import Nav from "@/components/Navbar/Navbar";

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
    <>
      <Nav />
      <main className={styles.main}>{children}</main>
    </>
  );
}
