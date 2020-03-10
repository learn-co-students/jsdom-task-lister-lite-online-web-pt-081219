const form = document.querySelector('#create-task-form');
const submission = document.querySelector('#new-task-description');
const list = document.querySelector('#tasks');

form.addEventListener("submit", event => {
  event.preventDefault()
  list.innerHTML += `<li>${submission.value}</li>`;
  form.reset()
});