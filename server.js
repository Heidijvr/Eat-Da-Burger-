var express = require("express");
var bodyParser = require("body-Parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
// var orm = require("./config/orm.js");
var mysql = require("mysql");

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Parse request body as JSON
var bodyParser = require("body-parser");
app.use(express.json());

// Override with POST having ?_method=DELETE 
app.use(methodOverride("_method"));


// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them
var routes = require("./controllers/routes.js");
app.use("/",routes);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });