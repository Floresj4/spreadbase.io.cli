"use strict";

var http = require("http");
var url = require("url");

function start(route, handle) {
	
	function onRequest(request, response) {
	}
	
	var port = 8000;
	http.createServer(onRequest).listen(port);
	console.log("Server has started.  Listening on port: " + port + "...");	
}