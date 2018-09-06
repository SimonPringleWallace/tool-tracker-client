const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./tool-crud/tool_apis.js')
const ui = require('./tool-crud/tool_ui.js')

const seeTools = function () {
  event.preventDefault()
  api.seeTools()
    .then(ui.displayTools)
    .catch(ui.fail)
  event.preventDefault()
  return false
}

const toolListRefresh = function () {
  api.seeTools()
    .then(ui.displayTools)
    .catch(ui.fail)
  return false
}

const seeOneTool = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.id) {
    api.seeOneTool(data)
      .then(ui.displayOneTool)
      .catch(ui.fail)
  } else {
    ui.fail()
  }
  document.getElementById('see-one-tool').reset()
  return false
}

const addTool = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addTool(data)
    .then(ui.addToolSuccess)
    .then(toolListRefresh)
    .catch(ui.fail)
  document.getElementById('add-a-tool').reset()
  return false
}

const editTool = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.editTool(data)
    .then(ui.editToolSuccess)
    .then(toolListRefresh)
    .catch(ui.fail)
  document.getElementById('edit-a-tool').reset()
  return false
}
const deleteTool = function () {
  event.preventDefault()
  const toolId = $(event.target).closest('section').data('id')
  api.deleteTool(toolId)
    .then(toolListRefresh)
    .catch(ui.fail)
}

const handlers = function () {
  $('#get-tools').on('click', seeTools)
  $('#see-one-tool').on('submit', seeOneTool)
  $('#add-a-tool').on('submit', addTool)
  $('#edit-a-tool').on('submit', editTool)
  $('#tool-list').on('click', '#delete-tool', deleteTool)
  $('.hammer-fit').toggleClass('hammerstrike')
  $('.signup-in-buttons').toggleClass('signup-in-button-sweep')
}

module.exports = {
  handlers
}
