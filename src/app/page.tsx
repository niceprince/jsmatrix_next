import Hero from "@/components/home/hero/Hero";
import Focus from "@/components/home/OurFocus/Focus";
import Features from "@/components/home/Features/Features";
import ReadyToHelp from "@/components/home/ReadyToHelp/ReadyToHelp";
import Metadata from "@/components/common/Metadata";
import { keywords } from "@/app-contents/WebItems";

export default function Home() {
  return (
    <main>
      <Metadata
        title="JSmatrix Web Development & Maintenance, Graphic Designs and Printing & Stationaries"
        keywords={keywords}
        description="Welcome to JSMatrix.in - your one-stop solution for web development, SEO, graphic design, printing services, and office stationery. We help businesses grow online and offline with innovative, creative, and reliable digital solutions tailored to your needs."
      />
      <Hero />
      <Focus />
      <Features />
      <ReadyToHelp />
    </main>
  );
}
