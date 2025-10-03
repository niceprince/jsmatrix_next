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
    </>
  );
};

export default WebDevelopment;
