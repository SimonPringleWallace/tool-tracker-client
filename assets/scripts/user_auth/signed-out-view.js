'use strict'

const signOutView = function () {
  $('#change-password-modal-button, #sign-out, #get-tools, #see-one-tool, #add-a-tool, #edit-a-tool').hide()
  $('#sign-in-modal-button, #sign-up-modal-button').show()
  $('#tool-list, #message-box').html('')
}

module.exports = {
  signOutView
}
