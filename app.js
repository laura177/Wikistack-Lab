const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const layout = require("./views/layout");
const { db, Page, User } = require("./models");
const wiki = require("./routes/wiki");
const users = require("./routes/users");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// Page.sync({ force: true }).then(() => {
//   return Page.create({
//     title: "Page 1",
//     slug: "test",
//     content: "test",
//     status: "open",
//   });
// });

// User.sync({ force: true }).then(() => {
//   return User.create({
//     name: "test",
//     email: "test@gmail.com",
//   });
// });

db.authenticate().then(() => {
  console.log("connected to the database");
});


app.get("/", (req, res) => {
  res.send(layout(`<p>Hello</p>`));
});

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

app.use("/wiki", wiki);

const PORT = 3000;

const init = async () => {
  await db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

init();
