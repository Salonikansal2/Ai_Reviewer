const express = require("express");
const aiRoutes = require("./routes/routes");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hiiiiiiiiii");
});

app.use("/ai", aiRoutes);

module.exports = app;
