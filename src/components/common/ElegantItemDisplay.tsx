"use client";

import { FC } from "react";
import { motion, Variants } from "framer-motion";
import { SendHorizontal } from "lucide-react";
import {
  Gift,
  Briefcase,
  Megaphone,
  Package,
  Printer,
  Sparkles,
} from "lucide-react";

export interface PrintingCategory {
  title: string;
  items: string[];
}

type PrintingCategoryProps = {
  printingCategories: PrintingCategory[];
  sectionTitle?: string;
  sectionDescription?: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const iconMap = [Gift, Briefcase, Megaphone, Printer, Package, Sparkles];

const ElegantItemsDisplay: FC<PrintingCategoryProps> = ({
  printingCategories,
  sectionTitle,
  sectionDescription = `Discover a complete range of printing solutions — from personalized
            gifts and corporate essentials to large-format banners and packaging
            prints.`,
}) => {
  return (
    <section className="w-full py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {sectionTitle && (
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              {sectionTitle}
            </h2>
          )}

          {sectionDescription && (
            <p className="mt-4 font-bold text-gray-600 max-w-2xl mx-auto text-base">
              {sectionDescription}
            </p>
          )}
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {printingCategories.map((cat, i) => {
            const Icon = iconMap[i];
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Icon className="w-8 h-8 text-indigo-500" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 mb-2 pl-3">
                      <SendHorizontal className="w-4 h-4 text-grey-500" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ElegantItemsDisplay;
