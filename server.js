var express = require("express");
var bodyParser = require("body-Parser");
var exphbs  = require('express-handlebars');
var methodOverride = require('method-override');
// var orm = require("./config/orm.js");
var mysql = require("mysql");

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Parse request body as JSON
var bodyParser = require('body-parser');
app.use(express.json());
  
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/router.js");
app.use("/",router);

var PORT = process.env.PORT || 3000;


// // Call orm method, passing in the anonymous function(with "res") as the callback.
// orm.selectWhere("burgers", "burger_name", "devoured", function(result) {
//     var data = result;
//     console.log(data);
//   });


// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "13513",
//   database: "burgers_db"
// });

// connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
  
//     console.log("connected as id " + connection.threadId);
//   });


  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });