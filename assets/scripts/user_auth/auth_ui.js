'use strict'
const store = require('../store.js')
const userIn = require('./signed-in-view.js')
const userOut = require('./signed-out-view.js')

const signUpSuccess = function () {
  $('#sign-up-modal-button').hide()
  console.log('Welcome! <br> What are you waiting for? <br> Sign in!')
}

const signInSuccess = function (response) {
  userIn.signInView()
  store.user = response.user
}
const signInFail = function () {
  console.log('You lie! <br> Please check your credentials and try again')
}

const fail = function () {
  console.log('fail!')
}

const signOutSuccess = function () {
  userOut.signOutView()
}

const signOutFailure = function () {
  console.log('You will never leave me! <br> Sign out failed, please try again.')
}

const changePWSuccess = function () {
  $('#change-password input').val('')
  console.log('your password has changed')
}

// const newGameStart = function (response) {
//   $('#winbox').html("get playin'!")
//   store.game = response.game
//   store.lastMove = undefined
//   gamePlay.addThingsToBoard(response)
//   $('#board').show()
//   $('#games-holder').html('')
//   $('#fail').hide()
// }
// const pastGames = function (response) {
//   if (response.games.length === 0) {
//     $('#games-holder').html(`<li> You have no previous conquests <br> get playin'! </li>`)
//   } else {
//     response.games.forEach(function (game, index) {
//       $('#games-holder').append(`<li> Game ${index} ${game.cells} </li>`)
//     })
//   }
// }
// const nextMove = function (response) {
//   store.game = response.game
//   gamePlay.addThingsToBoard(response)
//   $('#winbox').html('')
//   $('#fail').hide()
//   $('#games-holder').html('')
//   if (store.tie === true) {
//     $('#winbox').html('Tie!')
//     store.tie = false
//     store.lastMove = undefined
//   } else if (store.game.over === true) {
//     $('#winbox').html(store.lastMove + ' wins!')
//     store.lastMove = undefined
// }
// }

module.exports = {
  signUpSuccess,
  fail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFailure,
  changePWSuccess
  // newGameStart,
  // nextMove,
  // pastGames
}
