const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://agnesteofilus:Baekkiexoxo4@cluster0.2ihso.mongodb.net/castaleDB"
);

app.use("/", require("./routes/categoryRoute"));
app.use("/", require("./routes/storyRoute"));

app.listen(3001, () => {
  console.log(`Express server is running on port 3001`);
});
