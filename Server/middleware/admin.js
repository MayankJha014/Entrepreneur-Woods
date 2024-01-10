const jwt = require("jsonwebtoken");
const UserSchema = require("../model/user_model");

const admin = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.status(401);

    const verified = jwt.verify(token, "passwordKey");
    if (!verified)
      return res
        .status(401)
        .json({ error: "Token verification failed, authorization denied." });
    const user = await UserSchema.findById(verified.id);
    if (user.type == "user" || user.type == "creator") {
      return res.status(401);
    }
    req.user = verified.id;
    req.token = token;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = admin;
