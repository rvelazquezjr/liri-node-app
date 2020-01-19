require("dotenv").config();
var keys = require("./key.js");
var axios = require("axios");
var moment = require("moment");
var dotenv = require("dotenv");
var spotify = new spotify(keys.SPOTIFY_ID);
var omdb = new omdb(keys.omdb);

var movieName = process.argv[2];
var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=&";

console.log(queryURL);
axios
  .get()
  .then(function(response) {
    
    
    console.log(response.data);
  })
  .catch(function(error) {
    if (error.response) {
      
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Worf---------------");
      console.log(error.response.status);
      console.log("---------------Shut up, Wesley!!!---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      
      console.log(error.request);
    } else {
      
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

/* Create an HTTP server to handle responses */

//http.createServer(function(request, response) {
//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.write("Hello World");
//    response.end();
//  }).listen(8888);




