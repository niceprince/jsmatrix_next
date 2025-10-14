import { JSX } from "react";

type SingleFeature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
};

const SingleFeature = ({ feature }: { feature: SingleFeature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full p-4">
      <div
        className="wow fadeInUp shadow-2xl shadow-gray-700 border border-solid border-sky-100 rounded-2xl p-4 sm:p-8 "
        data-wow-delay=".15s"
      >
        <div className="w-full mb-6 flex items-center justify-space-between">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div>
          <div>
            <h3 className="text-xl pl-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </h3>
          </div>
        </div>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
