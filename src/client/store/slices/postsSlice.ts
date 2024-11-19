import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonplaceholderApi } from "../../api/jsonPlaceholderApi";
import { IPostState, IUser, IPost } from "../../types/types";

const initialState: IPostState = {
  allPosts: [],
  favoritePosts: [],
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (thunkApi) => {
    const resp = await jsonplaceholderApi.getAllPosts();
    return resp.data;
  }
);

const postsSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.allPosts.push(action.payload);
    },
    setUsers: (state, action) => {
      state.allPosts = state.allPosts.map((post: IPost) => {
        return {
          ...post,
          user: (
            action.payload.find((user: IUser) => {
              return JSON.stringify(user.id) === JSON.stringify(post.userId);
            }) as any
          ).username,
        };
      });
    },
    likePost: (state, action) => {
      state.allPosts.map((post) => {
        if (post.id === action.payload) {
          post.like = +1;
        }
      });
    },
    dislikePost: (state, action) => {
      state.allPosts.map((post) => {
        if (post.id === action.payload) {
          post.dislike = +1;
        }
      });
    },
    zeroReaction: (state, action) => {
      state.allPosts.map((post) => {
        if (post.id === action.payload) {
          post.like = 0;
          post.dislike = 0;
        }
      });
    },
    addToFavorite: (state, action) => {
      state.allPosts.map((post) => {
        if (post.id === action.payload) {
          post.favorite = true;
        }
      });
      state.favoritePosts.push(
        state.allPosts.find((post) => {
          return JSON.stringify(post.id) === JSON.stringify(action.payload);
        }) as IPost
      );
    },
    removeFromFavorite: (state, action) => {
      state.allPosts.map((post) => {
        if (post.id === action.payload) {
          post.favorite = false;
        }
      });
      state.favoritePosts = state.allPosts.filter(
        (post) => post.favorite === true
      );
    },
    clearFavorite: (state) => {
      state.favoritePosts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      (state.allPosts as []) = action.payload.map((post: IPost) => {
        return { ...post, user: "", like: 0, dislike: 0 };
      });
    });
  },
});
export const {
  setPost,
  setUsers,
  likePost,
  dislikePost,
  zeroReaction,
  addToFavorite,
  removeFromFavorite,
} = postsSlice.actions;

export default postsSlice.reducer;
