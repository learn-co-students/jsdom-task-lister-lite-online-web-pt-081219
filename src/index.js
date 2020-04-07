const form = document.getElementById('create-task-form');
const description = document.getElementById('new-task-description');
const taskUl = document.getElementById('tasks');

form.addEventListener('submit', event => {
  event.preventDefault();
  const node = document.createElement('li');
  node.textContent = `${description.value}`;
  taskUl.appendChild(node);
  event.target.reset()
});
