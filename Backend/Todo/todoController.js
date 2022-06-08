const { TodoModel } = require('../db/sequelize');
const fs = require('fs');
/*B-addConstants*/

exports.list = async function (req, res) {
  const todos = await TodoModel.findAll();
  res.send({ "list": todos });
}

exports.pendingTask = async function (req, res) {
  const pendingList = await TodoModel.findAll({ where: { 'state': 'OPEN' } });
  res.send({ "list": pendingList });
}

exports.closedTask = async function (req, res) {
  const closedList = await TodoModel.findAll({ where: { 'state': 'CLOSE' } });
  res.send({ "list": closedList });
}

/*B-addMethods*/

exports.add = async (req, res) => {
  let imageName = '';
  /*B-addMethodInstructions*/
  await TodoModel.create({
    message: req.body.task,
    state: "OPEN",
    image: imageName,
  });
  return res.send({ "res": "valid" });

};

exports.delete = async (req, res) => {
  const id = req.params.id;
  /*B-addDeleteMethodInstructions*/
  await TodoModel.destroy({ where: { id: id } });
  res.send({});
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const state = req.params.state;
  const updatedTodo = {
    state
  };

  await TodoModel.update(updatedTodo, { where: { id: id } });
  res.send({});
};
