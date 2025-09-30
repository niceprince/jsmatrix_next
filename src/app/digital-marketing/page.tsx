import Metadata from "@/components/common/Metadata";
import PageHeadContents from "@/components/common/PageHeadContents";
import LegalTerm from "@/components/legal/LegalTerm";

const DigitalMarketing = () => {
return (
    <>
      <Metadata 
        title="Terms of Service | JS Matrix - Web Development, Design & Printing Solutions"
        keywords="About JS Matrix, Web development company, Website design agency, Software solutions provider, SEO services, Graphic design, Printing services"
        description="Learn about JS Matrix, a trusted provider of web development, website design, software solutions, SEO, graphic design, and printing services. Discover our mission to deliver complete digital and print solutions for businesses."
      />
      
      <PageHeadContents title="Digital Marketing">
        <LegalTerm />
      </PageHeadContents>

      <div className="container mx-auto mb-9 w-full wow fadeInUp shadow-three mb-12 rounded-sm bg-amber-600 px-8 py-11">
        <h2 className='mb-4 text-4xl font-bold text-center !leading-tight text-white '>Why Choose Us?</h2>

      </div>
    </>
  )
}

export default DigitalMarketing;