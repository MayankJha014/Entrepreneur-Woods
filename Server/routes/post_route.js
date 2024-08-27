const express = require("express");
const postRouter = express.Router();
const auth = require("../middleware/auth");
const {
  createPost,
  getCreatorPost,
  getCreatorPostById,
  updatePost,
  rssFeedPost,
  getMostViewPost,
  searchPost,
  getAllUniqueCategories,
  getPostByCategories,
  rssPost,
  getMostViewPostByCategories,
} = require("../controller/post_controller");

postRouter.post("/creator/create-post", auth, createPost);
postRouter.post("/creator/update-post/:postId", auth, updatePost);
postRouter.get("/creator/post", auth, getCreatorPost);
postRouter.put("/search/post", searchPost);
postRouter.get("/most-view/post", getMostViewPost);
postRouter.get("/post/cat", getAllUniqueCategories);
postRouter.get("/rss", auth, rssFeedPost);
postRouter.get("/rss/trial", auth, rssPost);
postRouter.put("/creator/post/:id", getCreatorPostById);
postRouter.put("/category/post", getPostByCategories);
postRouter.put("/category/post/view", getMostViewPostByCategories);

module.exports = postRouter;
