import { createSlice } from "@reduxjs/toolkit";
import { getMostViewPost, getPostById } from "../action/post_action";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    posts: null,
    isError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getPostById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(getPostById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});
