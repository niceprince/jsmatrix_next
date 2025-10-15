import { ReactElement } from "react";

type PageHeadContentsProps = {
  title: string;
  children?: ReactElement;
};
const PageHeadContents: React.FC<PageHeadContentsProps> = ({
  title,
  children,
}) => (
  <section className="pt-16 md:pt-20 lg:pt-18">
    <div className="bg-slate-700 drop-shadow">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white ">
          {title}
        </h1>
      </div>
    </div>
    {children && (
      <div className="container mx-auto">
        <div className="border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="mx-4 flex flex-wrap">{children}</div>
        </div>
      </div>
    )}
  </section>
);

export default PageHeadContents;
