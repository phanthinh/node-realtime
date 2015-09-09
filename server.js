var express = require('express');
var app = express();
//var path    = require("path");
app.get('/', function (req, res) {
  res.send('Hello World!');
 // res.sendFile(path.join(__dirname+'/index.html'));
});
var port = 3000;
/**
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
**/


var io = require('socket.io').listen(app.listen(port));
//io.set('transports', ["websocket", "polling"]);
console.log('Chat server is running and listening to port %d... ',port);


io.sockets.on('connection', function (socket) {
    // socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        // io.sockets.emit('message', data);
                io.sockets.emit('message', data);
    });


});
