const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url, req.method);

  //set header content type for plain text
  //   res.setHeader("Content-Type", "text/plain");
  //   res.write("hello from server");
  //   res.end();

  //set header content type for HTML text
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<p>hello from server</p>");
  //   res.write("<p>hello again from server</p>");
  //   res.end();

  //to return HTML file as a response
  // res.setHeader("Content-Type", "text/html");
  // fs.readFile('../views/index.html', (err,data) =>{
  //     if(err) {
  //         console.log(err);
  //         res.end();
  //     } else {
  //         // res.write(data);
  //         // res.end();
  //         res.end(data);  // we can pass data in end method
  //     }
  // })

  //routing in node
  let path = "../views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.setHeader("Location", "/about");
      res.statusCode = 301; //resource is perfmanantly moved to another location  // Not required to set this if we use express
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  res.setHeader("Content-Type", "text/html"); //if we use express.js there is no need to use this header setup line, as express does it for us
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      // res.end();

      res.end(data); // we can pass data in end method
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests");
});

//lodash

const num = _.random(0, 20);
console.log(num);

const greet = _.once(() => {
  console.log("hello only once..!");
});

greet();
greet();
