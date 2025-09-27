import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JS Matrix | Web Development, Software & Design and Printing Solutions",
  keywords: "Web Development, Web Maintanance, Web Designing, Graphic Designing, Printing Designing",
  description: "Expert services in web development, website design, software development, SEO, and web page performance. We also provide emailer design, graphic designs, book and card designs, banner designs, printing solutions, poster and book printing, stationery, and computer hardware services.",
  icons: {
    icon: "/favicon.svg", // relative to /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
