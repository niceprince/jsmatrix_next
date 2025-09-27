import Metadata from "@/components/common/Metadata";
import AboutSectionOne from "@/components/about/AboutSectionOne";
import PageTwoSectionView from "@/components/common/PageTwoSectionView";
import Animate from "@/components/about/ImageBox/Animate";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const About = () => {
  const List = ({ text }: {text:string}) => (
    <p className="mb-5 flex items-center text-lg font-medium text-white">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
    return (
        <>
          <Metadata 
            title="About Us | JS Matrix - Web Development, Design & Printing Solutions"
            keywords="About JS Matrix, Web development company, Website design agency, Software solutions provider, SEO services, Graphic design, Printing services"
            description="Learn about JS Matrix, a trusted provider of web development, website design, software solutions, SEO, graphic design, and printing services. Discover our mission to deliver complete digital and print solutions for businesses."
          />
          <PageTwoSectionView RightItem={Animate}>
            <AboutSectionOne />
          </PageTwoSectionView>

          <div className="container mx-auto mb-9 w-full wow fadeInUp shadow-three mb-12 rounded-sm bg-amber-600 px-8 py-11">
            <h2 className='mb-4 text-4xl font-bold text-center !leading-tight text-white '>Why Choose Us?</h2>

            <ul className='m-auto w-full md:w-11/12'>
              <List text="End-to-End Solutions – From web development and SEO to design, printing, and stationeries, we cover all your digital and offline branding needs under one roof." />
              <List text="Custom Web Development – We create fast, secure, and scalable websites tailored to your business goals, ensuring a seamless user experience." />
              <List text="Reliable Web Maintenance – Our proactive maintenance keeps your site updated, bug-free, and optimized for performance at all times." />
              <List text="Result-Driven SEO – We implement proven strategies to boost your online visibility, attract organic traffic, and improve search engine rankings." />
              <List text="Creative Graphic Design – Our designs are modern, engaging, and brand-focused, helping your business stand out in both digital and print media." />
              <List text="Quality Printing Services – From brochures and flyers to business cards and banners, we deliver premium-quality prints that leave a lasting impression." />
              <List text="Corporate Stationeries – Professionally designed and printed stationeries that enhance your brand’s identity and credibility." />
              <List text="Client-Centric Approach – We listen to your needs, provide transparent communication, and deliver solutions that align with your vision." />
              <List text="Affordable & Scalable Packages – Flexible pricing that fits businesses of all sizes, with room to scale as you grow." />
              <List text="Proven Experience & Expertise – Backed by years of industry experience, our team brings technical know-how and creative excellence to every project." />
            </ul>
          </div>
        </>
    )
}

export default About;