const { MONOGO_URL } = require("../env/env");
const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose.connect(MONOGO_URL, {});

  mongoose.connection.on("connected", () => {
    console.log("connected to mongodb success");
  });
};

module.exports = {
  connectToDatabase,
};
