'use strict';
const PublicChatController = require('./PublicChatController');

class SocketController {
  setup(app) {
    const http = require('http');
    const server = http.createServer(app);
    const io = require('socket.io').listen(server, app.get('port'));
    this.socketMap = new Map();
    this.publicChatController = new PublicChatController(io.sockets);

    io.sockets.on('connection', (socket) => {
      socket.on('new_connection', (message) => {
        console.log(`${this.constructor.name}: receive new_connection from ${message.username}`);
        this.socketMap.set(message.username, socket);
        socket.username = message.username;
        socket.broadcast.emit('new_login');
      });
      socket.on('public_say', (message) => {
        this.publicChatController.handlePublicSay(socket, message);
      });
    });

    app.set('port', process.env.PORT || 3001);
    server.listen(app.get('port'));
  }

  findReceiver(name) {
    return this.socketMap.get(name);
  }
}

const socketController = new SocketController();

module.exports = socketController;
