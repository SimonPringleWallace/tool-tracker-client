'use strict'
const store = require('../store.js')

// const fail = function () {
//   $('#winbox').html('')
//   $('#fail').show()
//   $('#sign-up input').val('')
// }

const signInSuccess = function (response) {
  console.log('sign-in success')
  store.user = response.user
  console.log(store.user)
}
// const signInFail = function () {
//   $('#winbox').html('You lie! <br> Please check your credentials and try again')
//   $('#sign-in input').val('')
// }
// const signOutSuccess = function () {
//   $('#board, #sign-out, #past-games-modal-button, #fail, #new-game, #change-password-modal-button').hide()
//   $('#winbox').html('')
//   $('#games-holder').html('')
//   $('#sign-in-modal-button, #sign-up-modal-button').show()
//   $('input').val('')
// }
// const signOutFailure = function () {
//   $('#winbox').html('You will never leave me! <br> Sign out failed, please try again.')
//   $('#sign-out input').val('')
// }
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
  signInSuccess
  // signInFail,
  // signOutSuccess,
  // signOutFailure,
  // changePWSuccess,
  // newGameStart,
  // nextMove,
  // pastGames
}
