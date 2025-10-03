import Hero from "@/components/home/hero/Hero";
import Focus from "@/components/home/OurFocus/Focus";
import Features from "@/components/home/Features/Features";
import ReadyToHelp from "@/components/home/ReadyToHelp/ReadyToHelp";
import Metadata from "@/components/common/Metadata";

export default function Home() {
  const keywords: string =
    "Web Development, Web Maintanance, Web Design, Web Designing, Graphic Design, Graphic Designing, Prints, Printing, Designing, JS Matrix, web development, seo services, digital marketing, graphic design, printing services, office stationery, web solutions, website maintenance, brand promotion, creative agency, online business growth, website optimization, professional web services, js matrix";
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
