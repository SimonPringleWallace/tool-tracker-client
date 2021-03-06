const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./user_auth/auth_apis.js')
const ui = require('./user_auth/auth_ui.js')

const signUp = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.fail)
  $('#sign-up-modal').modal('hide')
  return false
}

const signIn = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  document.getElementById('sign-in').reset()
  $('.sign-in-div').toggleClass('sign-in-slide-in')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
  return false
}

const signOut = function () {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const changePW = function () {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePW(data)
    .then(ui.changePWSuccess)
    .catch(ui.fail)
  $('#change-password-modal').modal('hide')
  return false
}

const hideRudeness = function () {
  event.preventDefault()
  $('#message-box').html('')
}

const clearOnClose = function () {
  $('input').val('')
}

const showSignForms = function () {
  console.log('clicked')
  $('.sign-in-div').toggleClass('sign-in-slide-in')
}

const handlers = function () {
  $('#sign-up').on('submit', signUp)
  $('.close').on('click', showSignForms)
  $('#sign-in').on('submit', signIn)
  $('#sign-out').on('click', signOut)
  $('#sign-in-button').on('click', showSignForms)
  $('#change-password').on('submit', changePW)
  $('#change-password-modal-button, #sign-in-button, #sign-up-button').on('click', hideRudeness)
  $('#change-password-modal, #sign-in-modal, #sign-up-modal').on('hidden.bs.modal', clearOnClose)
}

module.exports = {
  handlers
}
