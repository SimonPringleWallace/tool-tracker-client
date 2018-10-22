'use strict'

const signOutView = function () {
  $('#change-password-modal-button, #sign-out, #get-tools, #see-one-tool, #add-a-tool, #edit-a-tool, #create-tool-button').fadeOut(1000)
  $('.signup-in-buttons').delay(900).fadeIn(250)
  $('.hammer-float').toggleClass('hammer-return')
  $('#tool-list, #message-box').html('')
}

module.exports = {
  signOutView
}
