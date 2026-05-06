"use client";

import Link from "next/link";
import { Globe, Palette, Printer, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Web",
    icon: Globe,
    desc: "Modern websites and web applications built with the latest technologies like Next.js, React and Node.js to help your business grow online.",
    link: "/web",
  },
  {
    title: "Graphics",
    icon: Palette,
    desc: "Creative design services including logo design, branding, social media graphics and marketing materials that strengthen your brand identity.",
    link: "/graphic-designs",
  },
  {
    title: "Printing Solutions",
    icon: Printer,
    desc: "High-quality printing services including brochures, business cards, banners and promotional materials for your business marketing.",
    link: "/printing-services",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            We provide end-to-end digital and creative solutions including
            website development, graphic design and professional printing
            services to help your business grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group border rounded-xl p-8 hover:shadow-xl transition bg-gray-50"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-pink-100 text-pink-600 mb-6">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">{service.desc}</p>

                {/* Link */}
                <Link
                  href={service.link}
                  className="inline-flex items-center text-pink-600 font-medium group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
