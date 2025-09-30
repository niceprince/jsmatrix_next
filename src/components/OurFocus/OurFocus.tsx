import Image from "next/image";
import Link from 'next/link';

type OurFocusProps = { 
  title: string;
  image: string;
  paragraph: string;
  tags: string[];
}

const OurFocus = ({ ourFocus } : {ourFocus: OurFocusProps }) => {
  const { title, image, paragraph, tags } = ourFocus;
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-md bg-white shadow-one duration-300"
        data-wow-delay=".1s"
      >
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3 className="text-center">
            <Link
              href="/blog-details"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-black dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="text-center mb-6 border-b-20 rounded border-red-700 pb-6 text-base font-medium dark:text-black text-body-color dark:border-slate-900">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default OurFocus;
