"use client";

import { Check } from "lucide-react";

const pricingData = {
  web: [
    {
      name: "Starter Website",
      price: "₹9,999",
      popular: false,
      features: [
        "Up to 5 Pages",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
        "Delivery in 7 Days",
      ],
    },
    {
      name: "Business Website",
      price: "₹19,999",
      popular: true,
      features: [
        "Up to 10 Pages",
        "Custom UI Design",
        "SEO Optimization",
        "Admin Panel",
        "WhatsApp Integration",
        "Delivery in 10 Days",
      ],
    },
    {
      name: "Premium Web App",
      price: "₹49,999",
      popular: false,
      features: [
        "Unlimited Pages",
        "Custom Development",
        "Custom Dashboard",
        "API Integration",
        "Performance Optimization",
        "Priority Support",
      ],
    },
  ],

  graphic: [
    {
      name: "Basic Design Pack",
      price: "₹2,999",
      popular: false,
      features: [
        "Logo Design",
        "2 Social Media Posts",
        "Basic Branding",
        "2 Revisions",
      ],
    },
    {
      name: "Brand Starter Kit",
      price: "₹6,999",
      popular: true,
      features: [
        "Logo Design",
        "Business Card",
        "Letterhead",
        "Social Media Kit",
        "5 Revisions",
      ],
    },
    {
      name: "Complete Branding",
      price: "₹11,999",
      popular: false,
      features: [
        "Premium Logo",
        "Full Brand Identity",
        "Marketing Graphics",
        "Social Media Templates",
        "Unlimited Revisions",
      ],
    },
  ],

  printing: [
    {
      name: "Starter Print Pack",
      price: "₹1,999",
      popular: false,
      features: ["100 Business Cards", "Flyer Design", "Standard Paper"],
    },
    {
      name: "Business Print Pack",
      price: "₹4,999",
      popular: true,
      features: [
        "500 Business Cards",
        "100 Brochure Printing",
        "Premium Paper",
        "Custom Design",
      ],
    },
    {
      name: "Corporate Print Pack",
      price: "₹9,999",
      popular: false,
      features: [
        "1000 Business Cards",
        "500 Brochure Printing",
        "3 Banners",
        "Premium Finishing",
      ],
    },
  ],
};

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Pricing Plans
          </h2>
          <p className="text-gray-500 mt-3">
            Flexible pricing for businesses of all sizes.
          </p>
        </div>

        {Object.entries(pricingData).map(([category, plans]) => (
          <div key={category} className="mb-20">
            <h3 className="text-2xl font-semibold capitalize text-gray-700 mb-10 text-center">
              {category} Services
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg p-8 relative hover:shadow-2xl transition ${
                    plan.popular ? "border-2 border-pink-600 scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute top-0 right-0 bg-pink-600 text-white text-xs px-3 py-1 rounded-bl-lg">
                      Most Popular
                    </span>
                  )}

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {plan.name}
                  </h4>

                  <div className="text-3xl font-bold text-pink-600 mb-6">
                    {plan.price}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <Check size={18} className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="w-full text-center block bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
