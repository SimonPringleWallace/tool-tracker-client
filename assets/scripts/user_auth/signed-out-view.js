'use strict'

const signOutView = function () {
  $('#change-password-modal-button, #sign-out, #get-tools, #see-one-tool, #add-a-tool, #edit-a-tool, #create-tool-button').hide()
  $('.signup-in-buttons').show()
  $('.hammer-float').toggleClass('hammer-return')
  $('#tool-list, #message-box').html('')
}

module.exports = {
  signOutView
}
