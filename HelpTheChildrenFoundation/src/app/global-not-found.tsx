// Import global styles and fonts
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <section className="h-dvh flex justify-center items-center flex-col ">
          <h1>Oops! This Page Isn&apos;t Here</h1>
          <p className="max-w-xl text-center">
            It looks like you&apos;ve found a dead end. Don&apos;t
            worry—let&apos;s get you back to where you can make a difference.
          </p>
        </section>

        <Footer />
      </body>
    </html>
  );
}
