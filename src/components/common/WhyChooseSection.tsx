type ChooseItems = {
  icon?: string;
  title: string;
  description: string;
};
interface WhyChooseForGraphicsProps {
  title: string;
  subtitle: string;
  items: ChooseItems[];
}
export default function WhyChooseSection({
  title,
  subtitle,
  items,
}: WhyChooseForGraphicsProps) {
  return (
    <section className="relative bg-gradient-to-r from-rose-800 to-pink-700 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          {title}
        </h2>
        <p className="text-lg text-rose-100 max-w-2xl mx-auto mb-12">
          {subtitle}
        </p>

        {/* Grid Items */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition transform"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full mb-4 mx-auto text-2xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-rose-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
