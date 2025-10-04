"use client"; // for Next.js App Router, remove if using Pages Router

import { useEffect, useState } from "react";

const COOKIE_KEY = "cookie_consent";

type ConsentValue = "accepted" | "rejected";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if consent already given
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value: ConsentValue) => {
    localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);

    if (value === "rejected") {
      // Optional: Clear tracking cookies or disable analytics here
      console.log("Cookies rejected");
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <p className="text-sm sm:mb-0">
        We use cookies to improve your experience on{" "}
        <span className="font-semibold">jsmatrix.in</span>. By continuing, you
        agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-gray-300">
          Cookies Policy
        </a>
        .
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => handleConsent("rejected")}
          className="bg-gray-600 hover:bg-gray-700 px-4 py-2 text-sm rounded-md transition cursor-pointer"
        >
          Reject
        </button>
        <button
          onClick={() => handleConsent("accepted")}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm rounded-md transition cursor-pointer"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
