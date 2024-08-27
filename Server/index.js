const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postRouter = require("./routes/post_route");
const authRouter = require("./routes/auth_route");
const cors = require("cors");
const navRouter = require("./routes/nav_route");
require("dotenv").config();

const DB = process.env.DB;

const PORT = 5000;
app.use(
  cors({
    "Access-Control-Allow-Origin": "*", // Specify the allowed headers
    origin: [
      "https://entrepreneur-woods-wprw-front.vercel.app",
      "http://localhost:3000",
      "http://localhost:3001",
      "https://entrepreneur-woods-evzs.vercel.app",
    ],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
    credentials: true,
  })
);
app.use(express.json());
app.use(postRouter);
app.use(authRouter);
app.use(navRouter);

mongoose
  .connect(DB)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Sever is running on ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
