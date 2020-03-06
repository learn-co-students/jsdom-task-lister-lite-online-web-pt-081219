document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.getElementById("create-task-form");

  newTaskForm.addEventListener("submit", createNewTask);

});

function createNewTask(event) {
  event.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();

};

function appendNewTask(task) {
  document.getElementById("tasks").appendChild(task);
};



// document.getElementById("submit").addEventListener("click", function(e) {
//   e.preventDefault();
//   let li = document.createElement("li");
//   li.innerText = document.getElementById("new-task-description").value;
//   console.log(document.getElementById("new-task-description").value);
//   let ul = document.getElementById("tasks");
//   ul.appendChild(li);
//   //ul.appendChild(li);
// });