var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);




app.use(express.static(__dirname + '/public'));
server.listen(8000);

io.sockets.on('connection', function(socket) {

	socket.on('msg_livre', function(message){
		me = message;
		socket.emit('send');;
		io.sockets.emit('msg_livre', me);
	});

	socket.on('msg_driver', function(message){
		me = message;
		socket.emit('send');
		io.sockets.emit('msg_driver', me);
	});
});

