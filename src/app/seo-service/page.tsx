import Metadata from "@/components/common/Metadata";
import PageHeadContents from "@/components/common/PageHeadContents";
import Seo from "@/components/developement/WebDev/Seo";
import LegalTerm from "@/components/legal/LegalTerm";

const SeoService = () => {
return (
    <>
      <Metadata 
        title="Terms of Service | JS Matrix - Web Development, Design & Printing Solutions"
        keywords="About JS Matrix, Web development company, Website design agency, Software solutions provider, SEO services, Graphic design, Printing services"
        description="Learn about JS Matrix, a trusted provider of web development, website design, software solutions, SEO, graphic design, and printing services. Discover our mission to deliver complete digital and print solutions for businesses."
      />
      
      <PageHeadContents title="Seo Service" />
      <Seo />
    </>
  )
}

export default SeoService;