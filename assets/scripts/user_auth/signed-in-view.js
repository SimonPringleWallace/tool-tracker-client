'use strict'
const store = require('../store.js')

const signInProcesses = function (serverResponse) {
  $('#change-password-modal-button, #sign-out, #get-tools, #see-one-tool, #add-a-tool, #edit-a-tool').show()
  $('.signup-in-buttons').hide()
  $('#message-box').html('')
  store.user = serverResponse.user
}
module.exports = {
  signInProcesses
}
