import Image from "next/image";
import SectionTitle from "../../common/SectionTitle";

const paraText = `Our team is committed to delivering exceptional solutions tailored to your unique needs. Whether you require a single service or a complete package, we bring expertise, creativity, and dedication to every project. We believe in building long-term partnerships and ensuring your satisfaction at every stage. Let’s work together to bring your ideas to life and achieve your business goals.`;

const ReadyToHelp = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-[#b5fffb]">
      <div className="container mx-auto">
        <SectionTitle
          title="We are ready to help"
          paragraph={paraText}
          width="1000px"
          center="center"
          mb="80px"
        />

        <div className="mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image
                  src="/images/ready-help/helpimg.jpg"
                  alt="video image"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/ready-help/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default ReadyToHelp;
