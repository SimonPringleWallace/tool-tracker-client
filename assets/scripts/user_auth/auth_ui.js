'use strict'
const userSignIn = require('./signed-in-view.js')
const userSignOut = require('./signed-out-view.js')

const signUpSuccess = function () {
  $('#message-box').html('Welcome! <br/> What are you waiting for? Sign In!')
}

const signInSuccess = function (serverResponse) {
  userSignIn.signInProcesses(serverResponse)
}
const signInFail = function () {
  $('#message-box').html('You swing a hammer that recklessly? <br/> Please check your credentials and try again.')
}

const fail = function () {
  $('#message-box').html('Like mixing concreate with a Pixie Stick - Fail! <br/> Please try again')
}

const signOutSuccess = function () {
  userSignOut.signOutView()
}

const signOutFailure = function () {
  $('#message-box').html('You will never leave me! <br> Sign out failed, please try again.')
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
