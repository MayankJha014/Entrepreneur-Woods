import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// export const server = "http://localhost:7000";

export const signup = createAsyncThunk("signUp", async (formData) => {
  try {
    const res = await fetch("https://entrepreneur-woods.vercel.app/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
export const signin = createAsyncThunk("signIn", async (formData) => {
  try {
    const res = await fetch("https://entrepreneur-woods.vercel.app/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      const errorData = await res.json();
      console.log(errorData);
      throw new Error(errorData.error);
    }

    const data = await res.json();

    console.log(data.token);
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const getUser = createAsyncThunk("getUser", async () => {
  try {
    const token = localStorage.getItem("token");

    console.log(token);
    const res = await fetch("https://entrepreneur-woods.vercel.app/getuser", {
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
