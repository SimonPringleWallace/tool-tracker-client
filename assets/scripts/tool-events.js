const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./tool-crud/tool_apis.js')
const ui = require('./tool-crud/tool_ui.js')
// const store = require('./../store.js')

const seeTools = function () {
  event.preventDefault()
  api.seeTools()
    .then(ui.displayTools)
    .catch(ui.fail)
  event.preventDefault()
  return false
}

const seeOneTool = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(`data is ${data.id}`)

  api.seeOneTool(data)
    .then(ui.displayOneTool)
    .catch(ui.fail)
  return false
}
//
// const signOut = function () {
//   event.preventDefault()
//
//   api.signOut()
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
//
// const changePW = function () {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//
//   api.changePW(data)
//     .then(ui.changePWSuccess)
//     .catch(ui.fail)
//   $('#change-password-modal').modal('hide')
//   return false
// }
// //
// // const hideRudeness = function () {
// //   event.preventDefault()
// //   $('#winbox').html('')
// //   $('#fail').hide()
// // }
// //
// // const wipeGames = function () {
// //   event.preventDefault()
// //   $('#games-holder').html('')
// // }
// //
// const clearOnClose = function () {
//   $('input').val('')
// }
// //
const handlers = function () {
  $('#get-tools').on('click', seeTools)
  $('#see-one-tool').on('submit', seeOneTool)
//   // $('#sign-up-modal-button').on('click', hideRudeness)
//   $('#sign-in').on('submit', signIn)
//   $('#sign-out').on('click', signOut)
//   $('#change-password').on('submit', changePW)
//   // $('#change-password-modal-button').on('click', hideRudeness)
//   // $('#previous-conquests').on('hidden.bs.modal', wipeGames)
//   $('#change-password-modal, #sign-in-modal, #sign-up-modal').on('hidden.bs.modal', clearOnClose)
}

module.exports = {
  handlers
}
