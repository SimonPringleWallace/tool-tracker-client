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

// const signIn = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/sign-in',
//     method: 'POST',
//     data
//   })
// }
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
// const changePW = function (data) {
//   console.log(data)
//   console.log(store.user.token)
//   return $.ajax({
//     url: config.apiUrl + '/change-password',
//     method: 'PATCH',
//     data,
//     headers: {
//       'Authorization': 'Token token=' + store.user.token
//     }
//   })
// }
//
module.exports = {
  seeTools
//   signIn,
//   signOut,
//   changePW
}
