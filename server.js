var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/routing/api-routes.js');
require('./app/routing/html-routes.js');

app.listen(PORT, function(){
  console.log("we listening")
})