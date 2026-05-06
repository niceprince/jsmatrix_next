import { ReactNode } from "react";
export type ChildrenFC<T = unknown> = React.FC<T & { children: ReactNode }>;

export type PortfolioItem = {
  title: string;
  desc: string;
  img: string;
  link?: string;
};
