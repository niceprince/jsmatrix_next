import SectionTitle from "../common/SectionTitle";

const AboutSectionOne = () => (
  <>
    <SectionTitle
      paragraph="Our main focus is on empowering businesses to safeguard their most critical and vulnerable applications. We achieve this through knowledge sharing, innovative solutions, and a collaborative approach that ensures organizations stay protected in an ever-evolving digital landscape."
      mb="44px"
    />
    <div className="w-full lg:max-w-[1000px] mx-auto">
      <div className="mb-6 lg:mb-0" data-wow-delay=".15s">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-full">
            {/* Intro */}
            <div className="mb-9">
              <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                Welcome to <strong>JSMatrix</strong>, your trusted partner for
                creative and digital solutions. We are a full-service company
                dedicated to helping businesses, brands, and individuals bring
                their ideas to life with innovation, quality, and reliability.
              </p>
            </div>

            {/* Services */}
            <div className="mb-9">
              <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                With a passion for design, technology, and customer
                satisfaction, we specialize in:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200">
                <li>
                  <strong>Web Development</strong> – From sleek websites to
                  powerful web applications, we craft digital experiences that
                  drive results.
                </li>
                <li>
                  <strong>Graphic Design</strong> – Creative visuals, branding,
                  and marketing materials that make your business stand out.
                </li>
                <li>
                  <strong>Printing & Stationery</strong> – High-quality printing
                  solutions and office stationery tailored to your everyday
                  business needs.
                </li>
                <li>
                  <strong>SEO & Digital Marketing</strong> – Optimized
                  strategies to enhance your online visibility and grow your
                  brand.
                </li>
                <li>
                  <strong>Office Solutions</strong> – Comprehensive support for
                  all your professional and operational requirements.
                </li>
              </ul>
            </div>

            {/* About */}
            <div className="mb-9 space-y-4">
              <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                At <strong>JSMatrix</strong>, we believe every project is
                unique. That’s why we combine creativity, strategy, and
                technology to deliver solutions that align with your goals. Our
                team of skilled designers, developers, and professionals works
                hand in hand to ensure quality, timely delivery, and complete
                customer satisfaction.
              </p>
              <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                Whether you’re a startup building your brand identity or an
                established business looking to expand, we are here to support
                your journey with innovative and cost-effective solutions.
              </p>
            </div>

            {/* Mission */}
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                ✨ Our Mission
              </h3>
              <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                To provide creative, reliable, and result-driven solutions that
                empower businesses to grow and succeed.
              </p>
            </div>

            {/* Vision */}
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                ✨ Our Vision
              </h3>
              <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                To be a one-stop partner for all digital, creative, and office
                needs by building lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutSectionOne;
