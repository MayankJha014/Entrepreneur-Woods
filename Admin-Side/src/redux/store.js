import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth";
import { postSlice } from "./slice/post";
import { homeSlice } from "./slice/home";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    post: postSlice.reducer,
    home: homeSlice.reducer,
  },
});

export default store;
