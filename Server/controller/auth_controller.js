const UserSchema = require("../model/user_model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserSchema.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with same email already exists!" });
    }

    const hashedPassword = await bcryptjs.hash(password, 8);

    let user = new UserSchema({
      email,
      password: hashedPassword,
      name,
    });
    user = await user.save();
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserSchema.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "User with this email does not exist!" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Incorrect password." });
    }

    const token = jwt.sign({ id: user._id }, "passwordKey");
    res.json({ token, ...user._doc });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
