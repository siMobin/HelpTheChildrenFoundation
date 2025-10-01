import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AOSInit } from "@/components/AOSInit";
import "aos/dist/aos.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Help The Children Foundation",
  description: "Help children to rewrite their future...",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "Help The Children Foundation", url: "https://hcfbd.org" }],
  creator: "siMobin",
  publisher: "Help The Children Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-18`}
      >
        <AOSInit />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
