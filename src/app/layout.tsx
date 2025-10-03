import type { Metadata } from "next";
import Script from "next/script";
import { Exo } from "next/font/google";
import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";

const exoSans = Exo({
  variable: "--font-exo-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-PN4B9822T7"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PN4B9822T7');
          `}
        </Script>
      </head>
      <body className={`${exoSans.variable} antialiased`}>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
