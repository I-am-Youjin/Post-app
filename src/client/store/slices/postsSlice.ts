import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonplaceholderApi } from "../../api/jsonPlaceholderApi";
import { IPostState } from "../../types/types";

const initialState: IPostState = {
  allPosts: [],
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (thunkApi) => {
    const resp = await jsonplaceholderApi.getAllPosts();
    console.log(resp);
    return resp.data;
  }
);

const postsSlice = createSlice({
  name: "setPosts",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.allPosts.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      (state.allPosts as []) = action.payload;
    });
  },
});
export const { setPost } = postsSlice.actions;

export default postsSlice.reducer;
