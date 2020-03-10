document.addEventListener("DOMContentLoaded", function(){
  console.log("hello");
  const myForm = document.getElementById("create-task-form");
  myForm.addEventListener("submit", createNewTask);
})

const createNewTask = event => {
  event.preventDefault();
  const myTask = document.getElementById("tasks");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value; 
  myTask.appendChild(newTask);
}
