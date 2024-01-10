const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
    },
    creator: {
      type: String,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    contentSnippet: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    view: {
      type: Number,
    },
    categories: [
      {
        type: String,
      },
    ],
    isoDate: {
      type: String,
    },
    src: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const PostSchema = mongoose.model("Post", postSchema);
module.exports = PostSchema;
