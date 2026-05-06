import React from "react";

const PageHeading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="bg-teal-700 drop-shadow">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white ">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageHeading;
