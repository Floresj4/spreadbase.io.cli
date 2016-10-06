"use strict";

var express = require("express");
var app = express();
var path = require('path');

const PORT = 8000;

app.get("/", function(req, res){
	console.log("Get /");
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, function() {
	console.log("listenining on port " + PORT);
});