const { response } = require("express");
const express = require("express");
const path = require("path");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");
 

// listen to requests
app.listen(3000);

app.get("/", (req, res) => {
  //res.send("<p>Home Page</p>");
  // response.send("../views/index.html",{root:__dirname}); // 2nd parameter is to tell express from where path (1st parameter) is relative to)
  res.sendFile(path.resolve("../views/index.html"));
});

app.get("/about", (req, res) => {
  //res.send("<p>About Page</p>");
  //response.send("../views/about.html",{root:__dirname}); // 2nd parameter is to tell express from where path (1st parameter) is relative to)
  res.sendFile(path.resolve("../views/about.html"));
});

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page
app.use((req, res) => {
  // use is used for setting middle ware in express
  res.status(404).sendFile(path.resolve("../views/404.html"));
});
