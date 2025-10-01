import React from "react";

interface SeparateLandingSectionProps {
  heading: string;
  headingSub: string;
  subHeading: string;
  description: string;
  buttonText: string;
  backgroundBg?: string;
}

const SeparateLandingSection: React.FC<SeparateLandingSectionProps> = ({
  heading,
  headingSub,
  subHeading,
  description,
  buttonText,
  backgroundBg = "bg-blue-600",
}) => {
  return (
    <section
      className={`relative z-10 overflow-hidden ${backgroundBg} py-20 lg:py-[115px]`}
    >
      <div className="container px-4 mx-auto">
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap items-stretch -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[870px] text-center">
                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                  <span>{heading}</span>
                  <br />
                  <span className="text-3xl font-normal md:text-[40px]">
                    {headingSub}
                  </span>
                </h2>
                <h3 className="text-2xl text-white font-normal md:text-[30px]">
                  {subHeading}
                </h3>
                <p className="mx-auto mb-6 max-w-[815px] text-base leading-[1.5] text-white">
                  {description}
                </p>
                <a
                  href="/contact"
                  target="_blank"
                  className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                >
                  {buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute top-0 left-0">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            ></circle>
            <circle
              cx="446"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            ></circle>
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="12"
            ></path>
          </svg>
        </span>
        <span className="absolute bottom-0 right-0">
          <svg
            width="493"
            height="470"
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            ></circle>
            <circle
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            ></circle>
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth="13"
            ></path>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default SeparateLandingSection;
