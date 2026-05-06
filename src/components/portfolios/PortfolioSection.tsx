"use client";

import Image from "next/image";
import { useState } from "react";
import { portfolioData } from "@/app-contents/WebItems";

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("all");
  const allItems = Object.values(portfolioData).flat();
  const items =
    activeTab === "all"
      ? allItems
      : portfolioData[activeTab as keyof typeof portfolioData];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Portfolio</h2>
          <p className="text-gray-800 text-lg mt-3">
            Explore some of our recent projects across web development, graphic
            design and printing services.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10">
          {["all", "web", "graphic", "printing"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full cursor-pointer capitalize font-medium transition 
              ${
                activeTab === tab
                  ? "bg-pink-600 text-white"
                  : "bg-white text-gray-600 border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <div className="overflow-hidden">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                    />
                  </a>
                ) : (
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                  />
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
