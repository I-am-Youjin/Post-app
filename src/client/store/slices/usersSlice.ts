import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonplaceholderApi } from "../../api/jsonPlaceholderApi";
import { IUser, IUserState } from "../../types/types";

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
    editUser: (state, action) => {
      const actionPayloadId = state.allUsers
        .map((user) => JSON.stringify(user))
        .indexOf(JSON.stringify(action.payload.currentUser));
      state.allUsers.splice(actionPayloadId, 1, action.payload.editedUser);
      state.currentUser = action.payload.editedUser;
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.allUsers as []) = action.payload.map((user: IUser) => {
        return {
          ...user,
          password: "",
        };
      });
    });
  },
});
export const { setUser, setCurrentUser, clearCurrentUser, editUser } =
  usersSlice.actions;

export default usersSlice.reducer;
