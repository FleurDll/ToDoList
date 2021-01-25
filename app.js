const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// INITIALISATION APP
const app = express();

// VARIABLES
const items = [];
const workItems = [];

// SET EJS
app.set("view engine", "ejs");

// RECUP DOC IMG/CSS & RECUP INFO PAGE HTML
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

// GET MAIN PAGE
app.get("/", function(req, res) {

  let day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

// GET WORK PAGE
app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work",
    newListItems: workItems
  });
});

// GET ABOUT PAGE
app.get("/about", function(req, res) {
  res.render("about");
});

// POST MAIN PAGE
app.post("/", function(req, res) {

  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

// POST WORK PAGE
app.post("/work", function(req, res) {
  res.redirect("/work");
});

// POST ABOUT PAGE
app.post("/about", function(req, res) {
  res.redirect("/about");
});

// LISTENING
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
