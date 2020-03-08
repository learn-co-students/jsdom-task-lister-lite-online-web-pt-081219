document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskDescription = document.getElementById("new-task-description")
  const form = document.getElementById("create-task-form")
  const newTaskPriority = document.getElementById("new-task-priority")
  const tasks = document.getElementById("tasks")

  form.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  console.log("event")
  event.preventDefault();
  const newTaskDescription = document.getElementById("new-task-description")
  const newTask = document.createElement("li")
  newTask.innerHTML = newTaskDescription.value
  removeTask(newTask)
  appendNewTask(newTask);
  // event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task)
};

  function removeTask(parent) {
    const btn = document.createElement("BUTTON");
    parent.appendChild(btn)
    btn.addEventListener("click", function(event){
      event.preventDefault()
      console.log("hello")
      parent.remove()
    })
  }
