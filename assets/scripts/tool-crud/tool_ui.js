const indexToolsHBars = require('../handle-bars/tool-lists.handlebars')
const showToolHBars = require('../handle-bars/single-tool.handlebars')
const displayTools = (serverResponse) => {
  const showToolsHtml = indexToolsHBars({ tools: serverResponse.tools })
  $('#tool-list').html(showToolsHtml)
}

const displayOneTool = function (serverResponse) {
  const showToolsHtml = showToolHBars({ tool: serverResponse.tool })
  $('#tool-list').html(showToolsHtml)
}

const addToolSuccess = function (serverResponse) {
  console.log(serverResponse.tool)
}
const editToolSuccess = function (serverResponse) {
// const stringResponse = JSON.stringify(serverResponse)
  console.log(serverResponse.tool)
}

const deleteToolSuccess = function () {
// const stringResponse = JSON.stringify(serverResponse)
  console.log('tool deleted')
}

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
  addToolSuccess,
  editToolSuccess,
  deleteToolSuccess
//   signInFail,
//   signOutSuccess,
//   signOutFailure,
//   changePWSuccess
}
