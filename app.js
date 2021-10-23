const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose"); // TO connect with Mongoose

// express app
const app = express();

const dbURI =
  "mongodb+srv://firstUser:CUcg2vomOqwm9vUE@cluster0.fql8m.mongodb.net/BloggerDB?retryWrites=true&w=majority";
//Connect to MongoDB using URI

mongoose
  .connect(dbURI, { useNewUrlParser: true })
  .then((res) => console.log("Connected To DB"))
  .catch((err) => console.error(err));

// listen for requests
app.listen(3000);

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("new request made:");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});

app.use((req, res, next) => {
  console.log("in the next middleware");
  next();
});

app.use(morgan("dev"));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
