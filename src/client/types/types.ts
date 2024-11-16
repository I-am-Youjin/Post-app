import { FC, ReactNode } from "react";

export interface IComponentWithChildren {
  children: ReactNode;
}

export interface IUserRoutes {
  id: string | number;
  path: string;
  Component: FC<any>;
  componentAdditionalProps?: any;
  strict?: boolean;
  title?: string;
}

export interface IPostCard {
  id: number;
  user: string;
  title: string;
  description: string;
  date?: string;
  img?: string;
}
