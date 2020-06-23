document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("create-task-form")
  const taskList = document.getElementById("list")
  const inputField = document.getElementById("new-task-description")

  todoForm.addEventListener("submit", addTask);

  function addTask() {
    // override the default event (post in this case), make a new li for the task list,get user input and add it to task list, reset the form
    event.preventDefault();
    let newTask = document.createElement("li");
    newTask.innerText = inputField.value;
    taskList.appendChild(newTask);
    event.target.reset();

  }
});

