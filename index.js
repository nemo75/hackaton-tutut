var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


app.use(express.static(__dirname + '/public'));
server.listen(8000);

io.sockets.on('connection', function(socket) {
	var messages = [];

	socket.on('newmsg', function(message){
		io.sockets.emit('newmsg', message);
	});
});
