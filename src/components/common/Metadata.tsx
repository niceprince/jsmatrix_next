import { ChildrenFC } from "@/utils/types";

type MetadataProps = {
  title: string;
  keywords: string;
  description: string;
  children?: ChildrenFC;
};
const Metadata: React.FC<MetadataProps> = ({
  title,
  keywords,
  description,
  children,
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <link
        rel="apple-touch-icon"
        href="https://www.jsmatrix.in/images/jsm-icon.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://www.jsmatrix.in/images/jsm-icon.svg"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jsmatrix.in/" />
      <meta
        property="og:title"
        content={title || "JSmatrix | Complete Web & Digital Solutions"}
      />
      <meta
        property="og:description"
        content={
          description ||
          "Web Development, SEO, Graphic Design, Printing & Stationary - all under one roof. Helping your business grow online and offline."
        }
      />
      <meta
        property="og:image"
        content="https://www.jsmatrix.in/images/jsmatrix-social-cover.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://jsmatrix.in/" />
      <meta
        name="twitter:title"
        content={title || "JSmatrix | Complete Web & Digital Solutions"}
      />
      <meta
        name="twitter:description"
        content={
          description ||
          "Web Development, SEO, Graphic Design, Printing & Stationary - all under one roof. Helping your business grow online and offline."
        }
      />
      <meta
        name="twitter:image"
        content="https://www.jsmatrix.in/images/jsmatrix-social-cover.png"
      />
      {children}
    </>
  );
};

export default Metadata;
