var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


app.use(express.static(__dirname + '/public'));
server.listen(8000);

io.sockets.on('connection', function(socket) {
	var messages_driver = [];
	var messages_livre = [];
	var history = 15;


	for(var k in messages_driver) {
		socket.emit('msg_livre', messages_driver[k]);
	}
	for(var k in messages_livre) {
		socket.emit('msg_driver', messages_livre[k]);
	}

	socket.on('msg_livre', function(message){
		me = message;
		me.id = message.id;
		socket.emit('send');
		io.sockets.emit('msg_livre', me);
	});

	socket.on('msg_driver', function(message){
		me = message;
		me.id = message.id;
		socket.emit('send');
		io.sockets.emit('msg_driver', me);
	});
});
