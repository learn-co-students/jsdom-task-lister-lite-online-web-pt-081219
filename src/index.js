const form = document.getElementById('create-task-form');
const submitted_task = document.getElementById('new-task-description');
const list = document.getElementById('tasks')

form.addEventListener("submit", function(e) {
  event.preventDefault();
  list.innerHTML += `<li> ${submitted_task.value} <a id="delete-task">x</a> </li>`;
  form.reset();
});






