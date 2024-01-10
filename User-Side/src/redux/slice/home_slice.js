import { createSlice } from "@reduxjs/toolkit";
import { getMostViewPost, getPostById } from "../action/post_action";
import { homeDetail } from "../../components/Home/home";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    isLoading: true,
    home: null,
    isError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(homeDetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(homeDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.home = action.payload;
    });
    builder.addCase(homeDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});
