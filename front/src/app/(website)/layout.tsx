import type { Metadata } from "next";
import "@/app/globals.css";

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
      {/* Webside NavBar goes here  */}
      <main>{children}</main>
      {/* Webside Footer goes here  */}
    </>
  );
}
