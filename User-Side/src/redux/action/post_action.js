import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMostViewPost = async () => {
  try {
    const res = await fetch(
      `https://entrepreneur-woods.vercel.app/most-view/post`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Cache-Control": "no-cache",
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
};

export const getPostById = createAsyncThunk(
  "getCreatorPostById",
  async (id) => {
    try {
      const res = await fetch(
        `https://entrepreneur-woods.vercel.app/creator/post/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getPostByCategories = async (category, number) => {
  try {
    const res = await fetch(
      `https://entrepreneur-woods.vercel.app/category/post?category=${category}&numPost=${
        number ?? 100
      }`,
      {
        method: "PUT",
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
};

export const getMostViewPostByCategories = async (category, number = 1000) => {
  try {
    const res = await fetch(
      `https://entrepreneur-woods.vercel.app/category/post/view?category=${category}&numPost=${number}`,
      {
        method: "PUT",
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
};

export const searchPost = createAsyncThunk("searchPost", async (search) => {
  try {
    const res = await fetch(
      `https://entrepreneur-woods.vercel.app/search/post?searchTerm=${search}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const getHomeDetail = createAsyncThunk("getHomeDetail", async () => {
  try {
    const res = await fetch("https://entrepreneur-woods.vercel.app/home/nav", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
});
