import AddPost from "../pages/AddPost/AddPost";
import AuthPage from "../pages/AuthPage/AuthPage";
import FavoritePostsPage from "../pages/FavoritePostsPage/FavoritePostsPage";
import PostPage from "../pages/PostPage/PostPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import { IUserRoutes } from "../types/types";

export const userRoutes: IUserRoutes[] = [
  {
    id: 2,
    path: "/post/:id",
    Component: PostPage,
    componentAdditionalProps: { postId: "99" },
    title: "Post",
  },
  {
    id: 3,
    path: "/favorite",
    Component: FavoritePostsPage,
    title: "FavoritePost",
  },
  {
    id: 4,
    path: "/profile",
    Component: ProfilePage,
    title: "post",
  },
  {
    id: 5,
    path: "/Auth",
    Component: AuthPage,
    title: "Auth",
  },
  {
    id: 6,
    path: "/addPost",
    Component: AddPost,
    title: "AddPost",
  },
];
