const express = require('express');
const router = new express.Router();

const socketController = require('../controllers/SocketController');

router.get('/', (req, res) => {
  socketController.publicChatController.getPublicMessageHistory(res);
});

router.post('/', (req, res, next) => {
  next();
}, (req, res) => {
  socketController.publicChatController.postPublicMessage(req, res);
});

router.get('/message/:id', (req, res, next) => {
  next();
}, (req, res) => {
  socketController.publicChatController.getPublicMessage(req, res);
});

module.exports = router;
