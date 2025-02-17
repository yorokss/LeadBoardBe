const axios = require("axios");
const User = require("../model/User");
const Score = require("../model/Score");

const addScore = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    const { score } = req.body;
    const newScore = new Score({
      userID: user._id,
      score: score,
    });
    await newScore.save();
    return res
      .status(201)
      .json({ message: "Score submitted successfully", data: newScore });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

const getleaderBoard = async (req, res) => {
  try {
    const leaderboard = await Score.find()
      .sort({ score: -1 })
      .limit(10)
      .populate("userID", "name email");

    return res.status(200).json({
      message: "Leaderboard retrieved successfully",
      data: leaderboard,
    });
  } catch (error) {
    console.error("Error fetching leaderboard:", error.message);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = {
  addScore,
  getleaderBoard,
};
