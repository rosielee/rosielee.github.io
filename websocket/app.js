// launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist

var express     = require('express');
var app         = express();
var http        = require('http').Server(app);
var io          = require('socket.io')(http);
var MongoClient = require('mongodb').MongoClient;

// ========================================
// static - CSS, JS, images
// ========================================

app.use(express.static('public'));

// ========================================
// ROUTES
// ========================================

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// ========================================
// SOCKET.IO
// ========================================

io.on('connection', function(socket) {

    // listen for a 'chat:message:submit' from the client
    socket.on('chat:message:submit', function(msg) {

        // send the 'chat:message:receive' back to the client
        io.emit('chat:message:receive', msg);

    });

});

// ========================================
// SERVER APP
// ========================================

http.listen(3000, function() {
    console.log('listening on *:3000');
});

