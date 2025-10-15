import Metadata from "@/components/common/Metadata";
import PageHeadContents from "@/components/common/PageHeadContents";
import WebDevelopmentItems from "@/components/developement/WebDev/WebDevelopment";

const WebDevelopment = () => {
  return (
    <>
      <Metadata
        title="Web Development Services"
        keywords="Javascript, Typescript, React, ReactJS, React.js, Next, NextJS, NodeJS, Ruby on Rails, PHP, WordPress, HTML, CSS, .net, dot net, Postgresql, postgres, software, Development, Gem, Ajax, API, Rails, Ruby, jQuery "
        description="We combine modern web technologies and best practices to build robust, scalable, and future-ready software solutions."
      />

      <PageHeadContents title="Web Development" />
      <WebDevelopmentItems />
      {/* <div className="container mx-auto py-8 sm:py-16 md:py-16 text-center">
        <a
          href="/contact"
          target="_blank"
          className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          🚀 Make a call now...
        </a>
      </div> */}
    </>
  );
};

export default WebDevelopment;
