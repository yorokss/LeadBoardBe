const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const createUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });
    if (!newUser) {
      return res.status(400).json({ message: "something went wrong" });
    }
    return res
      .status(200)
      .json({ message: "user created successfully", data: newUser });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({ message: "invalid password" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWTSECRET, {
      expiresIn: "1h",
    });
    const { password: _, ...userData } = user.toObject();
    return res.status(200).json({ message: "login successful", token, data: userData });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createUser,
  loginUser,
};
