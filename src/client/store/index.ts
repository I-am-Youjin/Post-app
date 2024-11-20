import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import usersReducer from "./slices/usersSlice";
import commentsReducer from "./slices/commetsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
  },
});
