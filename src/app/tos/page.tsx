import Metadata from "@/components/common/Metadata";
import LegalTerm from "@/components/legal/LegalTerm";

const Tos = () => {
  return (
    <>
      <Metadata
        title="Terms of Service - JSMatrix.in Web, Graphics, Printing & Stationary"
        keywords="terms of service, js matrix terms, website terms, service agreement, user agreement, policies, legal terms, website usage, service conditions, terms and conditions"
        description="Read the Terms of Service for JSMatrix.in. This page outlines the rules, guidelines, and legal conditions governing the use of our website and services, ensuring a safe and transparent experience for all users."
      />
      <section className="pt-16 md:pt-20 lg:pt-18">
        <div className="bg-teal-700 mb-8 drop-shadow">
          <div className="container mx-auto py-8">
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white ">
              Terms of Service
            </h1>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="border-body-color/[.15] pb-8 dark:border-white/[.15] md:pb-12 lg:pb-14">
            <div className="mx-4 flex flex-wrap">
              <LegalTerm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tos;
