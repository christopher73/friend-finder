var express = require("express");
var app = express();

const routers = require("./app/routing/apiRoutes");

//var apiRoutes = require("./app/routing/apiRoutes");
var handlebars = require("express-handlebars");

app.engine(".hbs", handlebars({ defaultLayout: "layout", extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use("/", routers.router);
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
