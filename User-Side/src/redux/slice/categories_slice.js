import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../action/category_action";
import { getMostViewPostByCategories } from "../action/post_action";

export const categorySlice = createSlice({
  name: "Category",
  initialState: {
    isLoading: false,
    category: null,
    isError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.category = action.payload;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});
