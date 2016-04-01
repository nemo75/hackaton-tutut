var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var moment = require('moment');


app.use(express.static(__dirname + '/public'));
server.listen(3000);

io.sockets.on('connection', function(socket) {

	// for(var k in messages_driver) {
	// 	socket.emit('msg_driver', messages_driver[k]);
	// }
	// for(var k in messages_livre) {
	// 	socket.emit('msg_livre', messages_livre[k]);
	// }

	socket.on('msg_livre', function(message){
		me = message;
		socket.emit('send');
		messages_livre.push(me);
		io.sockets.emit('msg_livre', me);
	});

	socket.on('msg_driver', function(message){
		me = message;
		socket.emit('send');
		io.sockets.emit('msg_driver', me);
	});
});
