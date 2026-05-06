import Metadata from "@/components/common/Metadata";
import PageHeading from "@/components/common/PageHeading";
import PortfolioSection from "@/components/portfolios/PortfolioSection";
import { keywords } from "@/app-contents/WebItems";

const Portfolio = () => {
  return (
    <>
      <Metadata
        title="Portfolio | JSMATRIX – Web Development & UI Projects Showcase"
        keywords={keywords}
        description="Explore the JSMATRIX portfolio featuring modern web development projects, responsive UI designs, and high-performance applications built using cutting-edge technologies."
      />

      <section className="pt-16 md:pt-20 lg:pt-18">
        <PageHeading title="Portfolio" />
        <PortfolioSection />
      </section>
    </>
  );
};

export default Portfolio;
