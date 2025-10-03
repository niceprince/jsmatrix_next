import Metadata from "@/components/common/Metadata";
import AboutSectionOne from "@/components/about/AboutSectionOne";
import PageTwoSectionView from "@/components/common/PageTwoSectionView";
import Animate from "@/components/about/ImageBox/Animate";
import WhyChooseSection from "@/components/common/WhyChooseSection";
import { WhyChooseAbout } from "@/app-contents/AboutPageData";

const About = () => {
  return (
    <>
      <Metadata
        title="About JSMatrix - Your Trusted Partner for Digital & Creative Solutions like Web, Graphics, Printing & Stationary"
        keywords="About JSmatrix, JS matrix Web development company, Website design agency, Software solutions provider, SEO services, Graphic design, Printing services, about us, js matrix, digital solutions, creative agency, web development company, graphic design studio, seo services, printing solutions, company profile, professional services, web solutions, branding agency"
        description="Learn about JSmatrix, a trusted provider of web development, website design, software solutions, SEO, graphic design, and printing services. Discover our mission to deliver complete digital and print solutions for businesses."
      />
      <PageTwoSectionView pageHeading="About Us" RightItem={Animate}>
        <AboutSectionOne />
      </PageTwoSectionView>
      <WhyChooseSection {...WhyChooseAbout} />
    </>
  );
};

export default About;
