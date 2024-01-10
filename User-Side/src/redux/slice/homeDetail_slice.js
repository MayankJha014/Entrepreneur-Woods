import { createSlice } from "@reduxjs/toolkit";
import {
  getHomeDetail,
  getMostViewPost,
  getPostById,
} from "../action/post_action";
import { homeDetail } from "../../components/Home/home";

export const homeDetailSlice = createSlice({
  name: "HomeDetail",
  initialState: {
    isLoading: true,
    home: null,
    isError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getHomeDetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getHomeDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.home = action.payload;
    });
    builder.addCase(getHomeDetail.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});
