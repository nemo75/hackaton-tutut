var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


app.use(express.static(__dirname + '/public'));
server.listen(3000);

io.sockets.on('connection', function(socket) {
	var messages = [];


	for(var k in messages) {
		socket.emit('stackmsg', messages[k]);
	}

	socket.on('msg', function(message){
		me = message;
		me.id = message.id;
		socket.emit('send');
		messages[me.id] = me;
		io.sockets.emit('newmsg', me);
	});
});