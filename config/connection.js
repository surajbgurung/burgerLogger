// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "pqxt96p7ysz6rn1f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "wtwrv4d87yy9b5zb",
  password: "m3dv2s5bgm791pi5",
  database: "lxoa3h0dqiak9c4p"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
