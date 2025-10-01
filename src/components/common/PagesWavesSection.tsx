"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScrollableButton from "./ScrollableButton";

type PagesWavesSectionProps = {
  heading: string;
  subHeading: string;
  description: string;
  buttonText: string;
  backgroundColors?: string;
};

function PagesWavesSection({
  heading,
  subHeading,
  description,
  buttonText,
  backgroundColors = "bg-orange-900",
}: PagesWavesSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [secScroll, setSecScroll] = useState<number>(350);

  useEffect(() => {
    if (sectionRef.current?.offsetTop)
      setSecScroll(
        sectionRef.current?.offsetTop + sectionRef.current?.offsetTop
      );
  }, []);

  return (
    <section
      className={`relative ${backgroundColors}`}
      x-data="{ mobileNavOpen: false }"
      ref={sectionRef}
    >
      <Image
        className="absolute top-0 left-0 w-full h-full"
        src="/images/bg-waves.png"
        fill
        alt="Bg image"
      />

      <div className="relative pt-18 pb-24 sm:pb-32 lg:pt-36 lg:pb-42">
        <div className="container mx-auto px-4 relative">
          <div className=" mx-auto text-center">
            <h2 className="font-heading text-4xl xs:text-5xl xl:text-6xl tracking-tight text-white mb-8">
              {heading}
            </h2>
            <h3 className="font-heading text-2xl xs:text-3xl xl:text-4xl tracking-tight text-white mb-8">
              {subHeading}
            </h3>
            <p className="max-w-md xl:max-w-none text-lg text-white opacity-80 mb-10">
              {description}
            </p>

            <ScrollableButton
              scrollAmount={secScroll}
              buttonText={buttonText}
              buttonClasses="inline-flex py-4 px-6 items-center cursor-pointer justify-center text-lg font-medium text-grey-900 border border-lime-500 hover:border-white bg-orange-500 hover:bg-white rounded-full transition duration-200"
            />

            {/* <a
              className=""
              href="/contact"
            >
              {buttonText}
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PagesWavesSection;
