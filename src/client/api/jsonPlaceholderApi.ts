import { jsonPlaceholderClient } from "../utils/http";

export const jsonplaceholderApi = {
  getAllPosts: () => jsonPlaceholderClient.get("/posts"),
  getAllUsers: () => jsonPlaceholderClient.get("/users"),
  getAllComments: () => jsonPlaceholderClient.get("/comments"),
};
