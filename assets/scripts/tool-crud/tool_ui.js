const displayTools = function (serverResponse) {
  console.log('Weeee got the tools!')
  console.log(serverResponse.tools)
}

const displayOneTool = function (serverResponse) {
  console.log('Oonnnly one tool')
  console.log(serverResponse.tool)
}

const addToolSuccess = function (serverResponse) {
  console.log(serverResponse.tool)
}
// const signInFail = function () {
//   console.log('You lie! <br> Please check your credentials and try again')
// }

const fail = function () {
  console.log('fail!')
}
//
// const signOutSuccess = function () {
//   userSignOut.signOutView()
// }
//
// const signOutFailure = function () {
//   console.log('You will never leave me! <br> Sign out failed, please try again.')
// }
//
// const changePWSuccess = function () {
//   console.log('your password has changed')
// }
//
module.exports = {
  displayTools,
  fail,
  displayOneTool,
  addToolSuccess
//   signInSuccess,
//   signInFail,
//   signOutSuccess,
//   signOutFailure,
//   changePWSuccess
}
