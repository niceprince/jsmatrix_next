import type { Metadata } from "next";
import { ChildrenFC } from "@/utils/types";

type MetadataProps = {
  title:string;
  keywords:string;
  description:string;
  children?: ChildrenFC;
}
const Metadata:React.FC<MetadataProps> = ({title, keywords, description, children}) => {
  return <>
    <title>{title}</title>
    <meta name='keywords' content={keywords} />
    <meta name='description' content={description} />
    {children}
  </>
}

export default Metadata;