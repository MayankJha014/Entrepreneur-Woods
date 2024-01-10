import { createSlice } from "@reduxjs/toolkit";
import { getRecentPost } from "../action/recent_action";

export const recentSlice = createSlice({
  name: "Recent",
  initialState: {
    isLoading: false,
    recent: null,
    isError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getRecentPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getRecentPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recent = action.payload;
    });
    builder.addCase(getRecentPost.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});
