var express = require("express"); // look for express in file
var socket = require("socket.io");

// App setup
var app = express();
var server = app.listen(9000, function() {
	console.log("listening to requests on port 9000");
});

// Use public directory to serve files
app.use(express.static("public"));

var io = socket(server);
io.on("connection", function(socket) {
	console.log("a user connected");
});
