const express = require("express");

const { PORT } = require("./constants/constants");
const { connectToDatabase } = require("./mongodb/mongodb");

var cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

connectToDatabase();

const todoRoutes = require("./routes/todoRoutes");
app.use("/api", todoRoutes);

app.listen(PORT, () => {
  console.log("My server running on port " + PORT);
});
