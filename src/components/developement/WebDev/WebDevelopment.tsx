import { WebDevItems } from "@/app-contents/WebItems";
import ItemWithGrids from "@/components/common/ItemWithGrids";

const WebDevelopmentItems = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Web Development for Businesses & Startups
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100">
            We combine modern technologies and best practices to build robust,
            scalable, and future-ready software solutions.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">⚛️ React</h2>
            <p className="text-gray-600 text-lg">
              React helps us build dynamic and reusable UI components with
              unmatched performance. It powers modern applications that deliver
              seamless experiences. React helps us build fast and scalable user
              interfaces. By using reusable components, we create applications
              that are easier to maintain and extend, while offering users
              lightning-fast performance and seamless interactions.
            </p>
          </div>
          <div className="bg-indigo-100 rounded-2xl h-64 flex items-center justify-center shadow-md">
            <span className="text-6xl">⚛️</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 bg-purple-100 rounded-2xl h-64 flex items-center justify-center shadow-md">
            <span className="text-6xl dark:text-gray-900">▲</span>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">▲ Next.js</h2>
            <p className="text-gray-600 text-lg">
              Next.js enables server-side rendering, static site generation, and
              optimized SEO, making it our go-to framework for high-performance
              web apps. Next.js takes React to the next level by adding
              server-side rendering (SSR), static site generation (SSG), and
              built-in optimization. This ensures blazing-fast load times,
              better SEO, and a smooth user experience — perfect for
              high-performance, UI-rich websites and applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              💎 Ruby on Rails
            </h2>
            <p className="text-gray-600 text-lg">
              Ruby on Rails speeds up backend development with its
              convention-over-configuration approach, helping us deliver secure
              and scalable applications faster. We leverage Ruby on Rails for
              powerful backend solutions. Its rapid development framework allows
              us to deliver secure, feature-rich applications while integrating
              beautifully with modern front-end technologies for a complete
              full-stack experience.
            </p>
          </div>
          <div className="bg-pink-100 rounded-2xl h-64 flex items-center justify-center shadow-md">
            <span className="text-6xl">💎</span>
          </div>
        </div>
      </section>

      <ItemWithGrids {...WebDevItems} />

      {/* <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Software Development
        </h1>
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
    </section> */}
    </>
  );
};

export default WebDevelopmentItems;
