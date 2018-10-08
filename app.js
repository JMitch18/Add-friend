var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//friends list
var friends = ["jaron", "courntey", "jamie", "tommy", "jackson"];

//home page
app.get("/", (req, res) => {
  res.render("home");
});

//friends page
app.get("/friends", (req, res) => {
  res.render("friends.ejs", { friends: friends });
});

// add friend
app.post("/addFriend", (req, res) => {
  var newFriend = req.body.newFriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

//starting port
app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
