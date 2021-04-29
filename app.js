const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const layout = require("./layout");
const { db } = require("./models");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.send(layout(`<p>Hello</p>`));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
