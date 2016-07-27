'use strict';

var test = require('tape');
var hello = require('./hello.js');
var http = require('http');
var flag = 2;

var server = http.createServer(function(res, req) {
	
});

server.listen(8080, function() {
	console.log('-------successfull---------');
	if (--flag <= 0) {
		process.exit(0);
	}
});

test('hello\'s output', function (t) {
  t.equal(hello(), 'Hello World');
  t.equal(hello(1), 'No');
  t.end();
  if (--flag <= 0) {
		process.exit(0);
	}
});
