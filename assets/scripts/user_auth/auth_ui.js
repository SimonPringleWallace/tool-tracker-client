'use strict'
const store = require('../store.js')

// const fail = function () {
//   $('#winbox').html('')
//   $('#fail').show()
//   $('#sign-up input').val('')
// }

const signInSuccess = function (response) {
  console.log('sign-in success')
  $('#sign-out').show()
  store.user = response.user
  console.log(store.user)
}
const signInFail = function () {
  console.log('You lie! <br> Please check your credentials and try again')
}
const signOutSuccess = function () {
  console.log('signed out!')
}
const signOutFailure = function () {
  console.log('You will never leave me! <br> Sign out failed, please try again.')
}
// const changePWSuccess = function () {
//   $('#change-password input').val('')
//   $('#winbox').html('your password has changed')
// }
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
  // signUpSuccess,
  // fail,
  signInSuccess,
  signInFail,
  signOutSuccess,
  signOutFailure
  // changePWSuccess,
  // newGameStart,
  // nextMove,
  // pastGames
}
