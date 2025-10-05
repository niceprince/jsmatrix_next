import ItemWithGrids from "@/components/common/ItemWithGrids";
import Metadata from "@/components/common/Metadata";
import PagesWavesSection from "@/components/common/PagesWavesSection";
import DevHeading from "@/components/developement/DevHeading";
import {
  graphicDesignCategories,
  GraphicsPageItems,
  graphicsSubHeading,
  headText,
  languages,
  paraText,
  WhyChooseForGraphics,
} from "@/app-contents/GraphicDesigns";
import WhyChooseSection from "@/components/common/WhyChooseSection";
import ElegantItemsDisplay from "@/components/common/ElegantItemDisplay";

const GraphicDesigns = () => (
  <>
    <Metadata
      title={`Creative Graphic Design Services – Branding & Visual Solutions | JSMatrix.in | ${headText}`}
      keywords="graphic design, branding design, logo design, business cards, brochures, visual identity, digital graphics, creative designs, marketing materials, poster design, flyer design, corporate branding, visual content, design services, custom illustrations"
      description="Bring your brand to life with JSMatrix's professional graphic design services. We create stunning visuals, logos, brochures, and marketing materials that effectively communicate your brand's identity and make your business stand out online and offline."
    />
    <section className="pt-18 pt-[4rem] md:pt-[70px]">
      <DevHeading
        headingBgText={languages}
        headText={headText}
        paraText={paraText}
      />
      <PagesWavesSection {...graphicsSubHeading} />
      <ItemWithGrids {...GraphicsPageItems} />
      <ElegantItemsDisplay
        elegantCategories={graphicDesignCategories}
        sectionDescription="Explore a complete range of graphic design solutions — from brand identity and marketing materials to web design, packaging, and motion graphics."
      />
      <WhyChooseSection {...WhyChooseForGraphics} />
    </section>
  </>
);

export default GraphicDesigns;
