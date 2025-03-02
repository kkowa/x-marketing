import styles from "@/styles/Layout.module.scss";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "X Marketing",
  description: "Welcome to our marketing website!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
