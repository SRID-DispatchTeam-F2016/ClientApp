const PublicMessageMeta = require('./PublicMessage.js');
const connection = require('../db.js').db;
const measureConnection = require('../db.js').measureDb;
const bcrypt = require('bcrypt-nodejs');

const PublicMessage = connection.define('public_message',
  PublicMessageMeta.attributes, PublicMessageMeta.options);

const init = () => {
  PublicMessage.sync({ force: false });
};

module.exports.init = init;
module.exports.PublicMessage = PublicMessage;

