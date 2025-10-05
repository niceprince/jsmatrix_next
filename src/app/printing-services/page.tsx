import Metadata from "@/components/common/Metadata";
import PageItemDisplay from "@/components/common/PageItemDisplay";
import DevHeading from "@/components/developement/DevHeading";
import { printingCategories } from "@/app-contents/PrintingPage";

import {
  ColumnPrintSolutions,
  headText,
  languages,
  paraText,
  printingItemsData,
  printingSubHeading,
  WhyChooseForPrinting,
} from "@/app-contents/PrintingPage";
import PagesWavesSection from "@/components/common/PagesWavesSection";
import ColumnTypeSection from "@/components/common/ColumnTypeSection";
import WhyChooseSection from "@/components/common/WhyChooseSection";
import ElegantItemsDisplay from "@/components/common/ElegantItemDisplay";

const PrintingServices = () => {
  return (
    <>
      <Metadata
        title="High-Quality Printing & Office Stationery Services | JSMatrix"
        keywords="printing services, business cards, brochures, flyers, custom stationery, office supplies, branded materials, print marketing, corporate stationery, promotional printing, personalized printing, printing solutions, high-quality print, stationery design, office branding"
        description="JSMatrix offers premium printing and office stationery services to help your brand make a lasting impression. From business cards and brochures to custom office supplies, we provide high-quality print materials tailored to your business needs."
      />
      <section className="pt-18 pt-[4rem] md:pt-[70px]">
        <DevHeading
          headingBgText={languages}
          headText={headText}
          paraText={paraText}
        />
      </section>
      <PagesWavesSection {...printingSubHeading} />

      <PageItemDisplay {...printingItemsData} />
      <ElegantItemsDisplay printingCategories={printingCategories} />

      <ColumnTypeSection {...ColumnPrintSolutions} />

      <WhyChooseSection {...WhyChooseForPrinting} />
    </>
  );
};

export default PrintingServices;
