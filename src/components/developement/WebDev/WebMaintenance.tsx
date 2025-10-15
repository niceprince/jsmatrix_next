const WebMaintenanceItem = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Website Maintenance Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-12">
            A well-maintained website ensures smooth performance, strong
            security, and a flawless user experience. We provide ongoing support
            to keep your website updated, optimized, and problem-free.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">🔄 Regular Updates</h3>
              <p className="text-gray-600 text-sm">
                Keep your website up-to-date with the latest plugins,
                frameworks, and security patches.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">🛡️ Security Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Protect your website against threats with 24/7 monitoring,
                malware scanning, and regular security checks.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">💾 Automated Backups</h3>
              <p className="text-gray-600 text-sm">
                Scheduled backups to ensure your website data is safe and can be
                restored anytime.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">
                ⚡ Performance Optimization
              </h3>
              <p className="text-gray-600 text-sm">
                Faster load times, smooth navigation, and improved SEO rankings
                through performance tuning.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">🐞 Bug Fixes</h3>
              <p className="text-gray-600 text-sm">
                Quick resolution of website errors, broken links, and technical
                glitches to keep things running.
              </p>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">✍️ Content Updates</h3>
              <p className="text-gray-600 text-sm">
                Update text, images, blogs, and products so your website always
                reflects your latest offerings.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <a
              href="/contact"
              target="_blank"
              className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition"
            >
              🚀 Keep My Website Updated
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebMaintenanceItem;
