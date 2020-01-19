var SPOTIFY_ID = 'ee63d40825824bd2be9bc8f062e7f966'; // Your client id
var SPOTIFY_SECRET = '28003fa88aab44bfb15ff9b1094baa1f'; // Your secret
var redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri
var scopes = 'user-read-private user-read-email';
var omdb = 'cf5cf626';








module.exports = {
  SPOTIFY_ID: SPOTIFY_ID,
  SPOTIFY_SECRET: SPOTIFY_SECRET,
  redirect_uri: redirect_uri,
  scopes: scopes,
  omdb: omdb
  
}
console.log('this is loaded');

