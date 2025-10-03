import Metadata from "@/components/common/Metadata";
import PageHeadContents from "@/components/common/PageHeadContents";
import DigitalMarketingContent from "@/components/developement/WebDev/DigitalMarketingContent";

const DigitalMarketing = () => {
  return (
    <>
      <Metadata
        title="Digital Marketing Services – Grow Your Brand Online | JSMatrix.in"
        keywords="digital marketing, online marketing, social media marketing, ppc advertising, email marketing, content marketing, marketing strategy, seo and digital marketing, brand promotion, online campaigns, lead generation, marketing automation, facebook ads, google ads, social media management"
        description="Expand your brand’s reach and grow your business online with JSMatrix’s professional digital marketing services. From social media campaigns and PPC advertising to content creation and email marketing, we deliver results-driven strategies to increase engagement, leads, and sales."
      />

      <PageHeadContents title="Digital Marketing" />
      <DigitalMarketingContent />
    </>
  );
};

export default DigitalMarketing;
