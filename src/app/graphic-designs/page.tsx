import ItemWithGrids from "@/components/common/ItemWithGrids";
import Metadata from "@/components/common/Metadata";
import PagesWavesSection from "@/components/common/PagesWavesSection";
import DevHeading from "@/components/developement/DevHeading";
import {
  GraphicsPageItems,
  graphicsSubHeading,
  headText,
  languages,
  paraText,
  WhyChooseForGraphics,
} from "@/app-contents/GraphicDesigns";
import WhyChooseSection from "@/components/common/WhyChooseSection";

const GraphicDesigns = () => (
  <>
    <Metadata
      title={`JS Matrix | ${headText}`}
      keywords={languages.join(", ")}
      description={paraText}
    />
    <section className="pt-18 pt-[4rem] md:pt-[70px]">
      <DevHeading
        headingBgText={languages}
        headText={headText}
        paraText={paraText}
      />
      <PagesWavesSection {...graphicsSubHeading} />
      <ItemWithGrids {...GraphicsPageItems} />
      <WhyChooseSection {...WhyChooseForGraphics} />
    </section>
  </>
);

export default GraphicDesigns;
