import React, { ReactElement } from "react";
import PageHeading from "./PageHeading";

type TwoPageSectionProps = {
  pageHeading?: string;
  RightItem: React.FC;
  pageSectionClasses?: string;
  children?: ReactElement;
};

const PageTwoSectionView: React.FC<TwoPageSectionProps> = ({
  pageHeading,
  RightItem,
  pageSectionClasses = "",
  children,
}) => {
  const RightSection = RightItem;

  return (
    <section className="pt-16 md:pt-20 lg:pt-18">
      {pageHeading && <PageHeading title={pageHeading} />}
      <div className="container mx-auto">
        <div className="border-body-color/[.15] pb-6 dark:border-white/[.15] md:pb-8 lg:pb-14">
          <div className="flex flex-wrap">
            <div
              className={`w-full px-4 pt-8 lg:w-1/2 ${
                pageSectionClasses.includes("contact-section")
                  ? "order-2 md:order-1 lg:order-1"
                  : ""
              }`}
            >
              {children}
            </div>
            <div className={`w-full lg:w-1/2 ${pageSectionClasses}`}>
              <div className="w-full">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[28/24] md:aspect-[25/24] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <RightSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTwoSectionView;
