import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// export const server = "http://localhost:7000";

export const creatPost = createAsyncThunk("createPost", async (formData) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5000/creator/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });
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
    const res = await fetch(
      `http://localhost:5000/creator/update-post/${formData}`,
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

export const getCreatorPost = createAsyncThunk("getCreatorPost", async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5000/creator/post", {
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

export const generatePosts = createAsyncThunk("generatePosts", async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:5000/rss", {
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
      const res = await fetch(`http://localhost:5000/creator/post/${id}`, {
        method: "PUT",
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
  }
);

export const getAllCategories = async () => {
  try {
    const res = await fetch(`http://localhost:5000/post/cat`, {
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
      `http://localhost:5000/search/post?searchTerm=${search}`,
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