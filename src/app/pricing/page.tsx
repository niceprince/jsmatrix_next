import Metadata from "@/components/common/Metadata";
import PageHeading from "@/components/common/PageHeading";
import PricingSection from "@/components/pricing/PricingSection";
import { keywords } from "@/app-contents/WebItems";

const Pricing = () => {
  return (
    <>
      <Metadata
        title="Pricing | JSMATRIX – Affordable Web Development Plans & Packages"
        keywords={keywords}
        description="View JSMATRIX pricing plans for web development, UI/UX design, and custom solutions. Transparent, affordable packages tailored to startups, businesses, and individuals."
      />
      <section className="pt-16 md:pt-20 lg:pt-18">
        <PageHeading title="Pricing" />
        <PricingSection />
      </section>
    </>
  );
};

export default Pricing;
