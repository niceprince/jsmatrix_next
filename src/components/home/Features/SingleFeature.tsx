"use client";
import { JSX } from "react";
import { motion, Variants } from "framer-motion";

type SingleFeature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
};

const SingleFeature = ({ feature }: { feature: SingleFeature }) => {
  const { icon, title, paragraph } = feature;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={2}
      whileHover={{ y: -5, scale: 1.02 }}
      className="w-full p-4"
    >
      <div className="shadow-2xl shadow-gray-700 border border-solid border-sky-100 rounded-2xl p-4 sm:p-8 ">
        <div className="w-full mb-6 flex items-center justify-space-between">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div>
          <div>
            <h3 className="text-xl pl-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </h3>
          </div>
        </div>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </motion.div>
  );
};

export default SingleFeature;
