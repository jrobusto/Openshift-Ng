var express = require("express");
var mysql = require("mysql");
var app = express();

/*
 * Configure MySQL parameters.
 */
var connection = mysql.createConnection({
  host: "localhost",
  user: "dev",
  password: "PA$$word00",
  database: "OpenshiftNg"
});

/*Connecting to Database*/
connection.connect(function (error) {
  if (error) {
    console.log("Problem with MySQL" + error);
  }
  else {
    console.log("Connected with Database");
  }
});

/*Start the Server*/
app.listen(3000, function () {
  console.log("Express server started on PORT 3000");
});

app.use(express.static('app'));
app.use('/bower_components', express.static('bower_components'));
app.get('/', function (req, res) {
  res.sendfile('app/index.html');
});
/*
 * Here we will call Database.
 * Fetch news from table.
 * Return it in JSON.
 */
app.get('/load', function (req, res) {
  connection.query("SELECT * from user_info", function (err, rows) {
    if (err) {
      console.log("Problem with MySQL" + err);
    }
    else {
      res.end(JSON.stringify(rows));
    }
  });
});
