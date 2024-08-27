import { createSlice } from "@reduxjs/toolkit";
import {
  creatPost,
  generatePosts,
  getCreatorPost,
  getCreatorPostById,
  searchPost,
  updatePost,
} from "../action/post";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    posts: [],
    isMessage: null,
    isError: null,
  },
  reducers: {
    clearError: (state) => {
      state.isError = null;
    },
    clearMessage: (state) => {
      state.isMessage = null;
    },
    clearPosts: (state) => {
      state.posts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(creatPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(creatPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isMessage = action.payload.message;
    });
    builder.addCase(creatPost.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(updatePost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isMessage = action.payload.message;
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(getCreatorPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCreatorPost.fulfilled, (state, action) => {
      state.isLoading = false;
      action.payload.forEach((element) => {
        state.posts.push(element);
      });
    });
    builder.addCase(getCreatorPost.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(searchPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(searchPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload);
    });
    builder.addCase(searchPost.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(generatePosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(generatePosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isMessage = action.payload.message;
    });
    builder.addCase(generatePosts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(getCreatorPostById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCreatorPostById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(getCreatorPostById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export const { clearError, clearMessage, clearPosts } = postSlice.actions;
