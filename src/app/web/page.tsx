import React from "react";
import Metadata from "@/components/common/Metadata";
import DevHeading from "@/components/developement/DevHeading";
import ColumnTypeSection from "@/components/common/ColumnTypeSection";
import {
  ExpertiseFieldsData,
  webLandingSection,
} from "@/app-contents/WebItems";
import SeparateLandingSection from "@/components/common/SeparateLandingSection";

const Web = () => {
  const languages = [
    "React",
    "NextJS",
    "JavaScript",
    "HTML",
    "CSS",
    "Ruby On Rails",
    "jQuery",
    "API",
    "TypeScript",
    "Angular",
    "Git",
  ];
  const keywords =
    "Javascript, Typescript, React, ReactJS, React.js, Next, NextJS, NodeJS, Ruby on Rails, JSmatrix, JS Matrix, PHP, WordPress, HTML, CSS, .net, dot net, Postgresql, postgres, software, Development, Gem, Ajax, API, Rails, Ruby, jQuery ";
  const description =
    "We combine modern web technologies and best practices to build robust, scalable, and future-ready software solutions.";
  const headText = "Web Development";
  const paraText = `We create fast, secure, and responsive websites that look great on every device. Our web solutions are built with the latest technologies to ensure seamless performance and long-term growth for your business.`;

  return (
    <>
      <Metadata
        title="Web Development Services | Website Development"
        keywords={keywords}
        description={description}
      />
      <section className="pt-18 pt-[4rem] md:pt-[70px]">
        <DevHeading
          headingBgText={languages}
          headText={headText}
          paraText={paraText}
          bgImage="/images/programming-background-collage.jpg'"
        />
      </section>

      <SeparateLandingSection {...webLandingSection} />

      <ColumnTypeSection {...ExpertiseFieldsData} />
    </>
  );
};

export default Web;
