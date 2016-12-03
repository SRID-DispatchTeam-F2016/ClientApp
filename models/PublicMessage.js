const Sequelize = require('sequelize');

const attributes = {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  timestamp: {
    type: Sequelize.STRING,
  },
};

const options = {
  freezeTableName: true,
};

module.exports.attributes = attributes;
module.exports.options = options;
