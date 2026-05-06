import Metadata from "@/components/common/Metadata";
import PageHeading from "@/components/common/PageHeading";
import ServicesSection from "@/components/services/ServiceSection";
import { keywords } from "@/app-contents/WebItems";

const Services = () => {
  return (
    <>
      <Metadata
        title="Services | JSMATRIX – Web Development, Graphic Design & Printing Solutions"
        keywords={keywords}
        description="Explore JSMATRIX services including web development, creative graphic design, and high-quality printing solutions. We deliver visually stunning and scalable results for businesses and individuals."
      />
      <section className="pt-16 md:pt-20 lg:pt-18">
        <PageHeading title="Sevices" />
        <ServicesSection />
      </section>
    </>
  );
};

export default Services;
