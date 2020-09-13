'use strict';


/**
 * todoアイテム一覧を取得する
 *
 * returns inline_response_200
 **/
exports.todoGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "text" : "10時までに皿を洗う",
  "title" : "皿を洗う",
  "status" : "waiting"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * todoアイテムを削除する
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.todoIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * todoアイテムを更新する
 *
 * id Integer 
 * body Body_1  (optional)
 * no response value expected for this operation
 **/
exports.todoIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * todoアイテムを新規作成する
 *
 * body Body 
 * no response value expected for this operation
 **/
exports.todoPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

