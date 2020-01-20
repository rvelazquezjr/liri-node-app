var bandsInTown = require('bandsInTown-api');
var omdb = require('omdb-api');
var spotify = require('node-spotify-api');

var bandsInTown = new bandsInTown('a35d17dd6c50cb56d528a962958daff0');
var omdb = new omdb('cf5cf626');
var spotify = new Spotify(keys.spotify);








console.log('the Matrix is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};







