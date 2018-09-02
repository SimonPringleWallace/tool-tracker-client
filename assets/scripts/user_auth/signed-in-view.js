'use strict'
const store = require('../store.js')

const signInProcesses = function (serverResponse) {
  $('#change-password-modal-button, #sign-out').show()
  $('#sign-in-modal-button, #sign-up-modal-button').hide()
  store.user = serverResponse.user
}
module.exports = {
  signInProcesses
}
