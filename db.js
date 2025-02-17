const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDb;
