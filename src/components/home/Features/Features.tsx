import SectionTitle from "../../common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="py-16 md:py-20 lg:py-28 bg-sky-100 dark:bg-sky-950"
      >
        <div className="container mx-auto">
          <SectionTitle
            title="Multiple Sevices Support"
            paragraph="We offer a comprehensive range of services under one roof, ensuring all your business needs are met efficiently and professionally."
            center="center"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
