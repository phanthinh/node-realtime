var express = require("express");

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/chat');

var app = express();
var port = 3700;


require('./app/models/message');

var Message = mongoose.model('Message');



app.get("/", function(req, res){
    res.send("It works!");
});
 
// app.listen(port);

var io = require('socket.io').listen(app.listen(port));

console.log('Chat server is running and listening to port %d... ',port);


io.sockets.on('connection', function (socket) {
    // socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        // io.sockets.emit('message', data);
		io.sockets.emit('message', data);
    });
	
	
});

