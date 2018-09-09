'use strict'
const store = require('../store.js')
const hammer = require('./hammer-animation-logic.js')

const signInProcesses = function (serverResponse) {
  $('#change-password-modal-button, .launch-new-tool, #sign-out, #get-tools, #see-one-tool, #edit-a-tool, #create-tool-button').fadeIn(1000)
  $('.signup-in-buttons').fadeOut(100)
  $('#message-box').html('')
  hammer.hammerAnimation()
  store.user = serverResponse.user
}
module.exports = {
  signInProcesses
}
