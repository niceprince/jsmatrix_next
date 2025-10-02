import React from "react";

type ItemsProps = {
  id: number;
  keyword: string | React.ReactNode;
  description: string;
};

type ItemsWithGridsProps = {
  heading: string;
  items: ItemsProps[];
};

const ItemWithGrids: React.FC<ItemsWithGridsProps> = ({ heading, items }) => {
  return (
    <>
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {items &&
              items.map(({ id, keyword, description }) => (
                <div
                  key={id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition"
                >
                  <h3 className="text-xl font-semibold mb-2 dark:text-gray-900">
                    {keyword}
                  </h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemWithGrids;
