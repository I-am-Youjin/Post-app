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
  title: string;
  description: string;
  date?: string;
  img?: string;
  user: string;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: string;
  like: number;
  dislike: number;
  favorite: boolean;
  img: string;
  date: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IComment {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}

export interface IPostState {
  allPosts: IPost[];
  // likedPosts: IPost[];
  // dislikedPosts: IPost[];
  favoritePosts: IPost[];
}

export interface IUserState {
  allUsers: IUser[];
}
