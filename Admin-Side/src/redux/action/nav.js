import { createAsyncThunk } from "@reduxjs/toolkit";

export const addNavLogo = createAsyncThunk("addNavLogo", async (navUrl) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      "https://entrepreneur-woods.vercel.app/home/nav-logo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ navLogo: navUrl }),
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

export const updateNavLogo = createAsyncThunk(
  "updateNavLogo",
  async (navUrl) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "https://entrepreneur-woods.vercel.app/home/update-nav",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ navLogo: navUrl }),
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
export const addAdsLogo = createAsyncThunk("addAdsLogo", async (navUrl) => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      "https://entrepreneur-woods.vercel.app/home/ads-logo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ adsLogo: navUrl }),
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

export const updateAdsLogo = createAsyncThunk(
  "updateAdsLogo",
  async (navUrl) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "https://entrepreneur-woods.vercel.app/home/update-ads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({ adsLogo: navUrl }),
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

export const deleteNavComp = createAsyncThunk(
  "deleteNavComp",
  async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "https://entrepreneur-woods.vercel.app/home/delete/nav-comp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            id: formData,
          }),
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
export const createNavComp = createAsyncThunk(
  "createNavComp",
  async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "https://entrepreneur-woods.vercel.app/home/create/nav-comp",
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
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getHomeDetail = createAsyncThunk("getHomeDetail", async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch("https://entrepreneur-woods.vercel.app/home/nav", {
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
