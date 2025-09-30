import React from 'react';
import Metadata from '@/components/common/Metadata';
import DevHeading from '@/components/developement/DevHeading';

const Web = () => {
  const languages = ['React', 'NextJS', 'JavaScript', 'HTML', 'CSS', 'Ruby On Rails', 'jQuery', 'API', 'TypeScript', 'Angular','Git'];
  const headText = 'Web Development'
  const paraText = `We create fast, secure, and responsive websites that look great on every device. Our web solutions are built with the latest technologies to ensure seamless performance and long-term growth for your business.`
  
  return <>
    <Metadata 
      title="JS Matrix | Web Development Services"
      keywords={languages.join(', ')}
      description={paraText}
    />
    <section className="pt-18 pt-[4rem] md:pt-[70px]">
      <DevHeading headingBgText={languages} headText={headText} paraText={paraText} bgImage="/images/programming-background-collage.jpg'" />
    </section>
    <section className="relative z-10 overflow-hidden bg-blue-600 py-20 lg:py-[115px]">
      <div className="container px-4 mx-auto">
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap items-stretch -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[870px] text-center">
                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                  <span>What Are You Looking For?</span><br />
                  <span className="text-3xl font-normal md:text-[40px]">
                    Get Started Now
                  </span>
                </h2>
                <h3 className="text-2xl text-white font-normal md:text-[30px]">
                  Crafting Modern, Scalable, and User-Friendly Web Experiences
                </h3>
                <p className="mx-auto mb-6 max-w-[815px] text-base leading-[1.5] text-white">
                  We specialize in building sleek, interactive, and performance-driven websites. With a strong focus on UI development, we ensure every project delivers a seamless user experience across all devices.
                </p>
                <a href="/contact" target='_blank' className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]">
                  Start using Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute top-0 left-0">
          <svg width="495" height="470" viewBox="0 0 495 470" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="55" cy="442" r="138" stroke="white" strokeOpacity="0.04" strokeWidth="50"></circle>
            <circle cx="446" r="39" stroke="white" strokeOpacity="0.04" strokeWidth="20"></circle>
            <path d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z" stroke="white" strokeOpacity="0.08" strokeWidth="12"></path>
          </svg>
        </span>
        <span className="absolute bottom-0 right-0">
          <svg width="493" height="470" viewBox="0 0 493 470" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="462" cy="5" r="138" stroke="white" strokeOpacity="0.04" strokeWidth="50"></circle>
            <circle cx="49" cy="470" r="39" stroke="white" strokeOpacity="0.04" strokeWidth="20"></circle>
            <path d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z" stroke="white" strokeOpacity="0.06" strokeWidth="13"></path>
          </svg>
        </span>
      </div>
    </section>


    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 px-6 text-white">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Our Core Expertise 🚀
      </h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-14">
        We craft cutting-edge web solutions using the latest technologies. From sleek frontends to powerful backends,
        our stack ensures performance, scalability, and modern design.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2">⚛️ React</h3>
          <p className="text-gray-600 text-sm">
            Build dynamic and interactive user interfaces with the power of components.
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2">▲ Next.js</h3>
          <p className="text-gray-600 text-sm">
            React framework with server-side rendering, API routes, and SEO optimization.
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2">📜 JavaScript</h3>
          <p className="text-gray-600 text-sm">
            The foundation of the web—enabling interactivity and powerful app logic.
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2">🌐 HTML</h3>
          <p className="text-gray-600 text-sm">
            The structure of every web page, defining meaningful layouts and content.
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2">🎨 CSS</h3>
          <p className="text-gray-600 text-sm">
            Styles that bring websites to life with responsive layouts and animations.
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2">💎 Ruby on Rails</h3>
          <p className="text-gray-600 text-sm">
            A battle-tested backend framework for building scalable applications fast.
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2">✨ jQuery</h3>
          <p className="text-gray-600 text-sm">
            Simplifies DOM manipulation and animations, still useful for lightweight apps.
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2">📝 WordPress</h3>
          <p className="text-gray-600 text-sm">
            A leading CMS for blogs, business sites, and custom eCommerce platforms.
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2">🔒 TypeScript</h3>
          <p className="text-gray-600 text-sm">
            A superset of JavaScript adding type safety, scalability, and maintainability.
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
          <h3 className="text-xl font-bold mb-2">🅰️ Angular</h3>
          <p className="text-gray-600 text-sm">
            A robust framework for building complex, scalable, single-page applications.
          </p>
        </div>
      </div>
    </div>
  </section>
  </>
}

export default Web;