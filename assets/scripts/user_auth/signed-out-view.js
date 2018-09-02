'use strict'

const signOutView = function () {
  $('#change-password-modal-button, #sign-out').hide()
  $('#sign-in-modal-button, #sign-up-modal-button').show()
}

module.exports = {
  signOutView
}
