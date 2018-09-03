const store = require('../store.js')
const config = require('../config.js')

const seeTools = function () {
  return $.ajax({
    url: config.apiUrl + '/tools',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
const seeOneTool = function (data) {
  return $.ajax({
    url: config.apiUrl + '/tools/' + data.id,
    method: 'GET',
    data,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const addTool = function (data) {
  return $.ajax({
    url: config.apiUrl + '/tools',
    method: 'POST',
    data,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const editTool = function (data) {
  return $.ajax({
    url: config.apiUrl + '/tools/' + data.id,
    method: 'PATCH',
    data,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
//
//
//
module.exports = {
  seeTools,
  seeOneTool,
  addTool,
  editTool
//   signOut,
//   changePW
}
