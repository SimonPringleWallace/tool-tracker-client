'use strict'
const store = require('../store.js')
const userSignIn = require('./signed-in-view.js')
const userSignOut = require('./signed-out-view.js')

const signUpSuccess = function () {
  $('#sign-up-modal-button').hide()
  $('#message-box').html('Welcome! <br/> What are you waiting for? Sign In!.')
}

const signInSuccess = function (serverResponse) {
  userSignIn.signInProcesses(serverResponse)
}
const signInFail = function () {
  $('#message-box').html('Like mixing concrete with a banana. Fail! <br/> Please check your credentials and try again.')
}

const fail = function () {
  $('#message-box').html('Nope! That failed, please try again')
}

const signOutSuccess = function () {
  userSignOut.signOutView()
}

const signOutFailure = function () {
  console.log('You will never leave me! <br> Sign out failed, please try again.')
}

const changePWSuccess = function () {
  $('#message-box').html('your password has changed')
}

module.exports = {
  signUpSuccess,
  fail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFailure,
  changePWSuccess
}
