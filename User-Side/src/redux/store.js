import { categorySlice } from "./slice/categories_slice";
import { homeDetailSlice } from "./slice/homeDetail_slice";
import { homeSlice } from "./slice/home_slice";
import { recentSlice } from "./slice/recent_slice";
import { searchSlice } from "./slice/search_slice";

const { configureStore } = require("@reduxjs/toolkit");
const { postSlice } = require("./slice/post_slice");

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    homeDetail: homeDetailSlice.reducer,
    recent: recentSlice.reducer,
    search: searchSlice.reducer,
    posts: postSlice.reducer,
    category: categorySlice.reducer,
  },
});

export default store;
