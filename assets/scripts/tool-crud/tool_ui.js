const indexToolsHBars = require('../handle-bars/tool-lists.handlebars')
const showToolHBars = require('../handle-bars/single-tool.handlebars')
const toolAPIs = require('./tool_apis.js')

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
  console.log(serverResponse.tool)
}

const deleteToolSuccess = function () {
  toolAPIs.seeTools()
}

const fail = function () {
  console.log('fail!')
}

module.exports = {
  displayTools,
  fail,
  displayOneTool,
  addToolSuccess,
  editToolSuccess,
  deleteToolSuccess
}
