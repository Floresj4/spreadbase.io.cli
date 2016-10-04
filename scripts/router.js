"use strict";

function route(handle, pathname, response, request) {
	console.log("about to route a request for " + pathname);
}

exports.route = route;