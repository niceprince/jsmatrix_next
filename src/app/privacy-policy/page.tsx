import Metadata from "@/components/common/Metadata";
import LegalTerm from "@/components/legal/LegalTerm";

const PrivacyPolicy = () => {
  return (
    <>
      <Metadata 
        title="Terms of Service | JS Matrix - Web Development, Design & Printing Solutions"
        keywords="About JS Matrix, Web development company, Website design agency, Software solutions provider, SEO services, Graphic design, Printing services"
        description="Learn about JS Matrix, a trusted provider of web development, website design, software solutions, SEO, graphic design, and printing services. Discover our mission to deliver complete digital and print solutions for businesses."
      />
      <section className="pt-16 md:pt-20 lg:pt-18">
        <div className="bg-teal-700 mb-8 drop-shadow">
          <div className="container mx-auto py-8">
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white ">Privacy Policy</h1>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="mx-4 flex flex-wrap">
              <LegalTerm />
            </div>
          </div>
        </div>
      </section>
      

      <div className="container mx-auto mb-9 w-full wow fadeInUp shadow-three mb-12 rounded-sm bg-amber-600 px-8 py-11">
        <h2 className='mb-4 text-4xl font-bold text-center !leading-tight text-white '>Why Choose Us?</h2>
      </div>
    </>
  )
}

export default PrivacyPolicy;