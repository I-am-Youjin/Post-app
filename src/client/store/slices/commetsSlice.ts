import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonplaceholderApi } from "../../api/jsonPlaceholderApi";
import { ICommentsState } from "../../types/types";

const initialState: ICommentsState = {
  allComments: [],
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (thunkApi) => {
    const resp = await jsonplaceholderApi.getAllComments();
    return resp.data;
  }
);

const commentsSlice = createSlice({
  name: "Comments",
  initialState,
  reducers: {
    setComment: (state, action) => {
      state.allComments.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      (state.allComments as []) = action.payload;
    });
  },
});
export const { setComment } = commentsSlice.actions;

export default commentsSlice.reducer;
