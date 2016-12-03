const Sequelize = require('sequelize');

const db = new Sequelize('database', 'user', 'pass', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },

  storage: 'database.db',
  force: false,
});

const measureDb = new Sequelize('database', 'user', 'pass', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },

  storage: 'measure.db',
  force: false,
});

module.exports.db = db;
module.exports.measureDb = measureDb;

