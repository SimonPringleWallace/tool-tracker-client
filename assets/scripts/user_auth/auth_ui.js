'use strict'
const store = require('../store.js')
const userSignIn = require('./signed-in-view.js')
const userSignOut = require('./signed-out-view.js')

const signUpSuccess = function () {
  $('#sign-up-modal-button').hide()
  console.log('Welcome! <br> What are you waiting for? <br> Sign in!')
}

const signInSuccess = function (serverResponse) {
  userSignIn.signInProcesses(serverResponse)
  console.log(store.user)
}
const signInFail = function () {
  console.log('You lie! <br> Please check your credentials and try again')
}

const fail = function () {
  console.log('fail!')
}

const signOutSuccess = function () {
  userSignOut.signOutView()
}

const signOutFailure = function () {
  console.log('You will never leave me! <br> Sign out failed, please try again.')
}

const changePWSuccess = function () {
  console.log('your password has changed')
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
