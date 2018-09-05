'use strict'
const store = require('../store.js')

const signInProcesses = function (serverResponse) {
  $('#change-password-modal-button, #sign-out, #get-tools, #see-one-tool, #add-a-tool, #edit-a-tool').show()
  $('#sign-in-modal-button, #sign-up-modal-button, #message-box').hide()
  store.user = serverResponse.user
}
module.exports = {
  signInProcesses
}
