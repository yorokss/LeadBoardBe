const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
  {
    score: {
      type: Number,
      required: true,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);
const Score = mongoose.model("score", scoreSchema);

module.exports = Score;
