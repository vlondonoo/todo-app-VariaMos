const Sequelize = require('sequelize');
const TodoSequelize = require('../models/todo');
const { DATABASE_NAME, USERNAME, PASSWORD, HOST, DIALECT } = require('../constants');


const sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  port: 3307,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const TodoModel = TodoSequelize(sequelize, Sequelize);

initialize(sequelize);

async function initialize(sequelize) {
  await sequelize.sync();
  console.log("All models were synchronized successfully.");
}

module.exports = {
  TodoModel
};