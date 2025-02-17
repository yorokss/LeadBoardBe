const axios = require("axios");
const User = require("../model/User");
const logGameSession = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "User authentication failed" });
    }
    const sessionData = {
      user: user._id,
      score: req.body.score,
    };
    if (!sessionData) {
      return res.status(400).json({ message: "Invalid session data" });
    }
    await axios.post("http://127.0.0.1:5001/log-session", sessionData);

    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Game session logging failed." });
  }
};

module.exports = logGameSession;
