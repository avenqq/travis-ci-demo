'use strict';

var test = require('tape');
var hello = require('./hello.js');
var http = require('http');

var server = http.createServer(function(res, req) {
	
});

server.listen(8080, function() {
	console.log('-------successfull---------');
});

test('hello\'s output', function (t) {
  t.equal(hello(), 'Hello World');
  t.equal(hello(1), 'No');
  t.end();
});
