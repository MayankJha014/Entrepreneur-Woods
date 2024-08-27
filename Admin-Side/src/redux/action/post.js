import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// export const server = "http://localhost:7000";

export const creatPost = createAsyncThunk("createPost", async (formData) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      "https://entrepreneur-woods.vercel.app/creator/create-post",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
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

export const updatePost = createAsyncThunk("updatePost", async (formData) => {
  try {
    const token = localStorage.getItem("token");
    console.log(formData);
    const postData1 = {
      title: formData.title,
      description: formData.content,
      thumbnail: formData.thumbnail,
      categories: formData.categories,
    };

    console.log(postData1);

    const res = await fetch(
      `https://entrepreneur-woods.vercel.app/creator/update-post/${formData.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(postData1),
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

export const getCreatorPost = createAsyncThunk(
  "getCreatorPost",
  async (page) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `https://entrepreneur-woods.vercel.app/creator/post?page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error);
      }

      const { posts } = await res.json();
      return posts;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const generatePosts = createAsyncThunk("generatePosts", async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("https://entrepreneur-woods.vercel.app/rss", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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

export const getCreatorPostById = createAsyncThunk(
  "getCreatorPostById",
  async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `https://entrepreneur-woods.vercel.app/creator/post/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
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

export const getAllCategories = async () => {
  try {
    const res = await fetch(`https://entrepreneur-woods.vercel.app/post/cat`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
    });
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
    const token = localStorage.getItem("token");
    const res = await fetch(
      `https://entrepreneur-woods.vercel.app/search/post?searchTerm=${search}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
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
});
