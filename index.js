// define variables and place into them the packages (shared code) from node.js
let myhttp = require("http"), // The HTTP core module is a key module to Node.js networking.
  mypath = require("path"), // The path module provides a lot of very useful functionality to access and interact with the file system.
  myurl = require("url"), // 
  myfilesys = require("fs"); // The fs module provides a lot of very useful functionality to access and interact with the file system.

// use dot notation in javascript to access an object and its methods (commands) and properties
// createServer() takes some arguments to make it provide a useful http server
// 1: function (block of code) that will be run whenever the server receives an http request

let myserver = myhttp.createServer(
  // createServer() uses our function to run when a request comes in
  function (myrequest, myresponse) {
    console.log(myrequest.url);
    console.log(url.parse(myrequest.url).pathname);

    let mytext;
    if (myrequest.url === "/hey") {
      mytext = "Well hello there...";
    } else {
      mytext = "I don't know you!";
    }

    mytext = mytext + " - Please help me... I am trapped in a Node.js server!";

    // writeHead() creates an http response header, including the status code (200 OK), the content type
    myresponse.writeHead(200, { "Content-Type": "text/plain" });

    // end() returns some data and closes the response (sends it)
    myresponse.end(mytext + "\n");
  } // function
);

// ask http to start listening on a tcp port for incoming http requests
// listen() takes 2 args: 1: tcp port #, string of the ip address to listen (0.0.0.0)
myserver.listen(8080, "0.0.0.0");

console.log("server has started"); 
