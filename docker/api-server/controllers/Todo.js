'use strict';

var utils = require('../utils/writer.js');
var Todo = require('../service/TodoService');

module.exports.todoGET = function todoGET (req, res, next) {
  Todo.todoGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todoIdDELETE = function todoIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Todo.todoIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todoIdPUT = function todoIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Todo.todoIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todoPOST = function todoPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Todo.todoPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
