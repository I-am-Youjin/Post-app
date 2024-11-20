import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonplaceholderApi } from "../../api/jsonPlaceholderApi";
import { IUserState } from "../../types/types";

const initialState: IUserState = {
  allUsers: [],
  currentUser: null,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (thunkApi) => {
    const resp = await jsonplaceholderApi.getAllUsers();
    return resp.data;
  }
);

const usersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.allUsers.push(action.payload);
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.allUsers as []) = action.payload;
    });
  },
});
export const { setUser, setCurrentUser } = usersSlice.actions;

export default usersSlice.reducer;
