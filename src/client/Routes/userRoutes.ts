import PostPage from "../pages/PostPage/PostPage";
import { IUserRoutes } from "../types/types";

export const userRoutes: IUserRoutes[] = [
  {
    id: 2,
    path: "/post/:id",
    Component: PostPage,
    componentAdditionalProps: { postId: "99" },
    title: "Post",
    strict: true,
  },
  {
    id: 3,
    path: "/favorite",
    Component: PostPage,
    componentAdditionalProps: { postId: "99" },
    title: "Post",
    strict: true,
  },
  {
    id: 4,
    path: "/profile",
    Component: PostPage,
    componentAdditionalProps: { postId: "99" },
    title: "Post",
    strict: true,
  },
];