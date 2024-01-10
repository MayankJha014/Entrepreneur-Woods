const express = require("express");
const navRouter = express.Router();
const auth = require("../middleware/auth");
const {
  addNavLogo,
  getNavbar,
  updateNavbar,
  addAdsLogo,
  updateAdsLogo,
  createNavComp,
  deleteNavComp,
} = require("../controller/nav_controller");

navRouter.post("/home/nav-logo", addNavLogo);
navRouter.post("/home/update-nav", updateNavbar);
navRouter.post("/home/ads-logo", addAdsLogo);
navRouter.post("/home/update-ads", updateAdsLogo);
navRouter.post("/home/create/nav-comp", createNavComp);
navRouter.post("/home/delete/nav-comp", deleteNavComp);
navRouter.get("/home/nav", getNavbar);

module.exports = navRouter;
