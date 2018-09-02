const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./user_auth/auth_apis.js')
const ui = require('./user_auth/auth_ui.js')
// const store = require('./../store.js')

const signUp = function () {
  const data = getFormFields(event.target)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.fail)
  event.preventDefault()
  $('#sign-up-modal').modal('hide')
  return false
}

const signIn = function () {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
  $('#sign-in-modal').modal('hide')
  return false
}

const signOut = function () {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
//
// const changePW = function () {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//
//   api.changePW(data)
//     .then(ui.changePWSuccess)
//     .catch(ui.fail)
//   $('#change-password-modal').modal('hide')
//   $('#change-password input').val('')
//   return false
// }
//
// const hideRudeness = function () {
//   event.preventDefault()
//   $('#winbox').html('')
//   $('#fail').hide()
// }
//
// const wipeGames = function () {
//   event.preventDefault()
//   $('#games-holder').html('')
// }
//
const clearOnClose = function () {
  $('input').val('')
}
//
const handlers = function () {
  // $('#sign-in-modal-button').on('click', signIn)
  $('#sign-up').on('submit', signUp)
  // $('#sign-up-modal-button').on('click', hideRudeness)
  $('#sign-in').on('submit', signIn)
  $('#sign-out').on('click', signOut)
  // $('#change-password').on('submit', changePW)
  // $('#change-password-modal-button').on('click', hideRudeness)
  // $('#previous-conquests').on('hidden.bs.modal', wipeGames)
  $('#change-password-modal, #sign-in-modal, #sign-up-modal').on('hidden.bs.modal', clearOnClose)
}

module.exports = {
  handlers
}
