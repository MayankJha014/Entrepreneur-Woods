import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostByCategories } from "./post_action";

export const getRecentPost = createAsyncThunk("getRecentPost", async () => {
  const data = await getPostByCategories("News", 10);
  return data;
});
