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
  console.log(`this data is going to ajax call ${data.id}`)
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
  console.log(`this data is going to ajax call ${data}`)
  return $.ajax({
    url: config.apiUrl + '/tools',
    method: 'POST',
    data,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
//
// const signOut = function () {
//   return $.ajax({
//     url: config.apiUrl + '/sign-out',
//     method: 'DELETE',
//     headers: {
//       'Authorization': 'Token token=' + store.user.token
//     }
//   })
// }
//
//
//
module.exports = {
  seeTools,
  seeOneTool,
  addTool
//   signOut,
//   changePW
}
