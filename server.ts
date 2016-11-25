/// <reference path="typings/node/node.d.ts" />

import greetings = require('./greetings');
import http = require('http');

http.createServer(function(req, res) {

	res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF-8' });
	res.end(greetings.next());

}).listen(process.env.PORT || 8889);
