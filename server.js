"use strict";

var fs = require("fs");
var http = require("http");
var dispatcher = require("httpdispatcher");

const PORT = 8000;

function handleRequest(request, response) {
	try {	//log and dispatch
		console.log(request.url);
		dispatcher.dispatch(request, response);
	} catch(err) {
		console.log(err);
	}
}

//initialize the server
var server = http.createServer(handleRequest);
server.listen(PORT, function() {
	console.log("Server listening on port: " + PORT);
});

dispatcher.onGet("/index", function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
    
	//load page
	fs.createReadStream('index.html').pipe(response);
});