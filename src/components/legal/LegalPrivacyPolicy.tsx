const LegalPrivacyPolicy = () => (
  <div className="w-full px-6 lg:max-w-[1000px] mx-auto">
    <div className="mb-12">
      <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
        At <strong>JS Matrix</strong> (“Company”, “we”, “our”, or “us”), we
        value your privacy and are committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, disclose,
        and safeguard your information when you visit our website{" "}
        <a
          href="https://www.jsmatrix.in"
          target="_blank"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          https://www.jsmatrix.in
        </a>{" "}
        (“Website”) and use our services. By using our Website, you agree to the
        practices described in this Privacy Policy.
      </p>
    </div>

    <div className="space-y-12">
      {/* Information We Collect */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            Personal details you provide (e.g., name, email, phone number).
          </li>
          <li>Project-related information you share with us for services.</li>
          <li>
            Technical information such as IP address, browser type, and device
            information.
          </li>
          <li>
            Usage data about how you interact with our Website (pages visited,
            time spent, etc.).
          </li>
        </ul>
      </div>

      {/* How We Use Information */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>To provide and improve our services.</li>
          <li>
            To communicate with you about projects, updates, or inquiries.
          </li>
          <li>
            To personalize user experience and improve Website functionality.
          </li>
          <li>To comply with legal obligations and resolve disputes.</li>
        </ul>
      </div>

      {/* Sharing Information */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          Sharing of Information
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We do not sell or rent your personal information. We may share your
          information in limited circumstances:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            With trusted partners or vendors who help us deliver services.
          </li>
          <li>
            When required by law, regulation, or legal process to protect our
            rights or the safety of others.
          </li>
          <li>
            In case of a merger, acquisition, or transfer of our business
            operations.
          </li>
        </ul>
      </div>

      {/* Data Security */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          Data Security
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We use appropriate technical and organizational measures to safeguard
          your personal information. However, no system is completely secure,
          and we cannot guarantee absolute protection.
        </p>
      </div>

      {/* Cookies & Tracking */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          Cookies & Tracking
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Our Website may use cookies and similar technologies to enhance user
          experience, analyze trends, and improve services. You can disable
          cookies through your browser settings, but some features may not work
          properly.
        </p>
      </div>

      {/* Your Rights */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          Your Rights
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            You have the right to access and update your personal information.
          </li>
          <li>
            You may request deletion of your personal data, subject to legal
            obligations.
          </li>
          <li>You can opt out of marketing communications anytime.</li>
        </ul>
      </div>

      {/* Third-Party Links */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          Third-Party Links
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Our Website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of those sites.
        </p>
      </div>

      {/* Policy Updates */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          Policy Updates
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated effective date. Continued use
          of our Website after changes means you accept the revised policy.
        </p>
      </div>

      {/* Contact Us */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          Contact Us
        </h2>
        <div className="space-y-1 text-gray-700 dark:text-gray-300">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:info@jsmatrix.in"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              info@jsmatrix.in
            </a>
          </p>
          <p>📞 Phone: +91 8368115720</p>
          <p>
            🌐 Website:{" "}
            <a
              href="https://www.jsmatrix.in"
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              https://www.jsmatrix.in
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LegalPrivacyPolicy;
