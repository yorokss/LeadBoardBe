const router = require("express").Router();
const fetchUser = require("../middleware/fetchUser")
const {addScore,getleaderBoard}=require("../controllers/scoreController")
const logGameSession = require("../middleware/logGameSession")

router.post("/score",fetchUser,logGameSession,addScore)
router.get("/leaderboard",fetchUser,getleaderBoard)

module.exports = router;