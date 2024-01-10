import { createSlice } from "@reduxjs/toolkit";
import { searchPost } from "../action/post_action";

export const searchSlice = createSlice({
    name: "Search",
    initialState: {
      isLoading: false,
      posts: null,
      isError: null,
    },
    extraReducers: (builder) => {
      builder.addCase(searchPost.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(searchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      });
      builder.addCase(searchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
    },
  });