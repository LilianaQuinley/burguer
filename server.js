var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var exphbs = require("express-handlebars");

var app = express();

var routes = require('./controllers/burgers_controller.js');

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: true

}))


// 
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
