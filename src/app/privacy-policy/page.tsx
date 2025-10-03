import Metadata from "@/components/common/Metadata";
import LegalPrivacyPolicy from "@/components/legal/LegalPrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <>
      <Metadata
        title="Privacy Policy - JSMatrix.in | Web, Graphics, Printing &  Stationary"
        keywords="privacy policy, js matrix privacy, data protection, user privacy, website privacy, personal information, data security, GDPR compliance, user data, privacy practices"
        description="Review the Privacy Policy of JSMatrix.in to understand how we collect, use, and protect your personal information. We are committed to safeguarding your data and ensuring transparency in all our digital and creative services."
      />
      <section className="pt-16 md:pt-20 lg:pt-18">
        <div className="bg-teal-700 mb-8 drop-shadow">
          <div className="container mx-auto py-8">
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white ">
              Privacy Policy
            </h1>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="border-body-color/[.15] pb-8 dark:border-white/[.15] md:pb-12 lg:pb-14">
            <div className="mx-4 flex flex-wrap">
              <LegalPrivacyPolicy />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
