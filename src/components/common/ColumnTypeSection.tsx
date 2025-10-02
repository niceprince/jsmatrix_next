interface ColumnData {
  icon?: string | React.ReactNode;
  title: string;
  description: string;
}
interface ColumTypeProps {
  title: string;
  description: string;
  items: ColumnData[];
}

export default function ColumnTypeSection({
  title,
  description,
  items,
}: ColumTypeProps) {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{title}</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-14">
          {description}
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index + "110"}
              className="bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-2 text-center">
                {item.icon && item.icon} {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
