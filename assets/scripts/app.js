'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userAuth = require('./user-events.js')
const toolCrud = require('./tool-events.js')

$('#new-game, #sign-out, #change-password-modal-button, #get-tools, #see-one-tool, #add-a-tool, #edit-a-tool, #fail').hide()
$(() => {
  userAuth.handlers()
  toolCrud.handlers()
  $('.hammer-fit').toggleClass('hammerstrike')
  $('.signup-in').toggleClass('buttonsweep')
})
