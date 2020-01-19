require("dotenv").config();
var keys = require("./key.js");
var axios = require("axios");
var moment = require("moment");
var dotenv = require("dotenv");
var spotify = new spotify(keys.SPOTIFY_ID);
var omdb = new omdb(keys.omdb);

var movieName = process.argv[2];
var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=[cf5cf626]&";

console.log(queryURL);
axios
  .get()
  .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Worf---------------");
      console.log(error.response.status);
      console.log("---------------Shut up, Wesley!!!---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
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




