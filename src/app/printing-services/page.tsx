import Metadata from "@/components/common/Metadata";
import PageItemDisplay from "@/components/common/PageItemDisplay";
import DevHeading from "@/components/developement/DevHeading";

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

const PrintingServices = () => {
  return (
    <>
      <Metadata
        title="JS Matrix | Printing Services"
        keywords={languages.join(", ")}
        description={paraText}
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

      <ColumnTypeSection {...ColumnPrintSolutions} />

      <WhyChooseSection {...WhyChooseForPrinting} />
    </>
  );
};

export default PrintingServices;
