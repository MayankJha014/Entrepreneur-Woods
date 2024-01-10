import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk(
  "getAllCategories",
  async () => {
    try {
      const res = await fetch(
        `https://entrepreneur-woods.vercel.app/post/cat`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        }
      );
      //   console.log(res)
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      // console.log(error);
      throw new Error(error);
    }
  }
);
