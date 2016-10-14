"use strict";

var express = require("express");
var app = express();
var request = require('request');
var path = require('path');

app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/view'));

app.get("/", function(req, res){
	console.log("get: /");
	
	
	//get the application version information
//	request('http://127.0.0.1:8080/info', function(err, body){
//		app.locals.version = JSON.parse(body.body);
//	});
	
	res.sendFile(path.join(__dirname + '/index.html'));
});

//app.post('/', function(req, res) {
//	console.log("post: /");
//	res.sendFile(path.join(__dirname + '/index.html'));
//});

app.listen(8000, function() {
	console.log("listenining on port " + 8000);
});

exports.app = app;