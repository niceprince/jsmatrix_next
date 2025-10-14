type SectionTitleProps = {
  title?: string;
  paragraph: string;
  width?: string;
  center?: string;
  mb?: string;
  txtColor?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  ...props
}: SectionTitleProps) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${
          center ? "mx-auto text-center" : ""
        } pb-16 md:pb-20 lg:pb-28`}
        data-wow-delay=".1s"
        style={{ maxWidth: width }}
      >
        {title && (
          <h2
            className={`mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl md:text-4xl ${
              props.txtColor && props.txtColor
            }`}
          >
            {title}
          </h2>
        )}
        <p
          className={`text-base !leading-relaxed text-body-color md:text-lg ${
            props.txtColor && props.txtColor
          }`}
        >
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
