const mongoose = require("mongoose");

const navSchema = new mongoose.Schema(
  {
    navabar: [
      {
        title: {
          type: String,
          required: true,
        },
        link: {
          type: String,
          required: true,
        },
        header: {
          type: String,
          required: true,
        },
        category: [
          {
            type: String,
            required: true,
          },
        ],
      },
    ],
    navLogo: {
      type: String,
    },
    adsLogo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const NavSchema = mongoose.model("Navbar", navSchema);
module.exports = NavSchema;
