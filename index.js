require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rateLimiter = require("./middleware/rateLimiter");
const connectToDb = require("./db");
connectToDb();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(rateLimiter);

app.get("/health", (req, res) => {
  res.send("Server is running!");
});

app.use("/api/auth", require("./router/user"));
app.use("/api", require("./router/score"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
