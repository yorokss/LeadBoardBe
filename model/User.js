const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, "name must be 3 characters long"],
    },
    password: {
      type: String,
      required: true,
      minLength: [5, "password must be 5 characters long"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
