document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newForm = document.querySelector('#create-task-form');
  let newTask = document.querySelector('#new-task-description');
	let allTasks = document.querySelector('#tasks');

newForm.addEventListener("submit", (e) => {
  e.preventDefault()
  allTasks.innerHTML += `<li>${newTask.value}</li>`;
  newForm.reset()
})
});
