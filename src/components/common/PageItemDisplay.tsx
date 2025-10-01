import React from "react";
import Image from "next/image";

type ItemContents = {
  id: number;
  imgPath: string;
  title: string;
  description: string;
};

type PageItemDisplayProps = {
  heading: string;
  subHeading: string;
  itemContents: ItemContents[];
};

const PageItemDisplay: React.FC<PageItemDisplayProps> = ({
  heading,
  subHeading,
  itemContents,
}) => {
  return (
    <>
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {heading}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{subHeading}</p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itemContents &&
              itemContents.map(({ id, imgPath, title, description }) => (
                <div
                  key={id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <Image
                    src={imgPath}
                    width={400}
                    height={200}
                    alt={title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm">{description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PageItemDisplay;
