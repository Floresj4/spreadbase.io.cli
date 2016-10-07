"use strict";

var express = require("express");
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/style'));

app.get("/", function(req, res){
	console.log("Get /");
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000, function() {
	console.log("listenining on port " + 8000);
});