const express = require("express");
const { signUp, signIn } = require("../controller/auth_controller");
const UserSchema = require("../model/user_model");
const auth = require("../middleware/auth");
const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.get("/getuser", auth, async (req, res) => {
  const user = await UserSchema.findById(req.user);
  res.json({ ...user._doc, token: req.token });
});

module.exports = authRouter;
