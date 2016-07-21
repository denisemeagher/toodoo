// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function ready() {
  $('#new_task').on('ajax:success', function newTask() {
  console.log(arguments);
  });

function newTask(event, data) {
  $('#tasks').append(data);
  $('#task_name').val('');
}
};
//$(ready)
$(document).on('ready', ready);
$(document).on("ready page:load", ready);
