'use strict';
const publicMessage = require('../models/models').PublicMessage;

class PublicChatController
{
  constructor(sockets) {
    this.sockets = sockets;
  }

  handlePublicSay(socket, message) {
    console.log(`${this.constructor.name}: receive public_say: `
      + `${message.username}, ${message.timestamp}, ${message.content}`);

    socket.broadcast.emit('public_say', message);
    return publicMessage.create(message);
  }

  getPublicMessageHistory(res) {
    return publicMessage.all().then((history) => {
      console.log(`${this.constructor.name}: get public history(${history.length})`);
      res.send(history);
    });
  }

  getPublicMessage(req, res) {
    return publicMessage.findById(req.param('id')).then((message) => {
      res.send(message);
    });
  }

  postPublicMessage(req, res) {
    const name = req.body.username;
    const time = req.body.timestamp;
    const ct = req.body.content;

    const newMessage = {
      username: name,
      timestamp: time,
      content: ct,
    };

    const msg = publicMessage.create(newMessage).then((message) => {
      console.log('new message sent.');
      const msg_id = { id: message.id };
      this.sockets.emit('public_new', msg_id);
    });
    return res.send({ state: 'success', status: req.body.status, message: 'Update complete' });
  }
}

module.exports = PublicChatController;
