import Metadata from "@/components/common/Metadata";
import PageHeadContents from "@/components/common/PageHeadContents";
import Seo from "@/components/developement/WebDev/Seo";

const SeoService = () => {
  return (
    <>
      <Metadata
        title="Professional SEO Services - Boost Your Website Traffic & Rankings | JSMatrix.in"
        keywords="seo services, search engine optimization, website ranking, seo company, on-page seo, off-page seo, local seo, technical seo, keyword research, seo audit, website traffic, seo expert, link building, digital marketing, organic search optimization"
        description="Enhance your online visibility and drive more traffic with JSMatrix’s professional SEO services. We provide comprehensive on-page, off-page, and technical SEO solutions tailored to improve your website rankings, increase organic traffic, and grow your business online."
      />

      <PageHeadContents title="Seo Service" />
      <Seo />
    </>
  );
};

export default SeoService;
