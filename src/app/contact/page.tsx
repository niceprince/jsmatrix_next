import Metadata from "@/components/common/Metadata";
import PageTwoSectionView from "@/components/common/PageTwoSectionView";
import ContactUs from "@/components/contact/Contact";
import ContactRight from "@/components/contact/ContactRight";

const Contact = () => {
  return (
    <>
      <Metadata
        title="Contact JSMatrix - Get in Touch for Digital & Creative Services"
        keywords="Contact JSmatrix, Web development contact, Website design support, Software solutions, SEO services, Printing services, Graphic design contact, contact us, js matrix contact, digital solutions inquiry, web development contact, seo services contact, graphic design contact, printing services contact, office stationery inquiry, reach us, customer support, business inquiry, get in touch, email js matrix, call js matrix"
        description="Reach out to JSMatrix for all your digital and creative service needs. Whether you’re interested in web development, SEO, graphic design, printing, or office stationery, our team is ready to assist you and provide tailored solutions for your business."
      />
      <PageTwoSectionView
        pageHeading="Contact Us"
        RightItem={ContactRight}
        pageSectionClasses="order-1 md:order-2 lg:order-2 contact-section"
      >
        <ContactUs />
      </PageTwoSectionView>
    </>
  );
};

export default Contact;
