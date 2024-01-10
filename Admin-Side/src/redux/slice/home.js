import { createSlice } from "@reduxjs/toolkit";
import {
  addAdsLogo,
  addNavLogo,
  createNavComp,
  deleteNavComp,
  getHomeDetail,
  updateAdsLogo,
  updateNavLogo,
} from "../action/nav";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    isLoading: false,
    home: null,
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
      state.posts = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addNavLogo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addNavLogo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isMessage = action.payload.message;
      state.home = action.payload.navbar;
    });
    builder.addCase(addNavLogo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(updateNavLogo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateNavLogo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.home = action.payload;
    });
    builder.addCase(updateNavLogo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(addAdsLogo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addAdsLogo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isMessage = action.payload.message;
      state.home = action.payload.navbar;
    });
    builder.addCase(addAdsLogo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(updateAdsLogo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateAdsLogo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.home = action.payload;
    });
    builder.addCase(updateAdsLogo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(createNavComp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createNavComp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.home = action.payload;
    });
    builder.addCase(createNavComp.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(deleteNavComp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteNavComp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isMessage = action.payload.message;
    });
    builder.addCase(deleteNavComp.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
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
