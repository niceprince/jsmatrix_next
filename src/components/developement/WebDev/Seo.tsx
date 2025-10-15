const Seo = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            SEO Services That Drive Results
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-12">
            Boost your online visibility, attract qualified traffic, and
            increase conversions with our professional SEO strategies. We focus
            on sustainable growth by improving rankings, optimizing performance,
            and building your brand’s authority.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">🔍 Keyword Research</h3>
              <p className="text-gray-600 text-sm">
                Identify the right keywords your audience is searching for to
                maximize organic reach and traffic potential.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">
                📄 On-Page Optimization
              </h3>
              <p className="text-gray-600 text-sm">
                Optimize meta tags, headings, content structure, and images to
                improve your site’s search engine friendliness.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">⚙️ Technical SEO</h3>
              <p className="text-gray-600 text-sm">
                Enhance website speed, fix crawl errors, and improve mobile
                responsiveness for better indexing and user experience.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">🔗 Link Building</h3>
              <p className="text-gray-600 text-sm">
                Gain high-quality backlinks from authoritative sources to boost
                your site’s domain authority and rankings.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">📍 Local SEO</h3>
              <p className="text-gray-600 text-sm">
                Improve visibility for local searches, Google Maps, and “near
                me” queries to attract nearby customers.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">
                📊 Analytics & Reporting
              </h3>
              <p className="text-gray-600 text-sm">
                Track performance with detailed analytics and reports, so you
                always know your ROI and progress.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <a
              href="/contact"
              target="_blank"
              className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition"
            >
              🚀 Rank Higher on Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Seo;
