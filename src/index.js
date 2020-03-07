document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.getElementById("create-task-form");

  newTaskForm.addEventListener("submit", createNewTask);

});

function createNewTask(event) {
  event.preventDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.setAttribute("id", newTaskDescription.value);
  let takeDown = document.createElement("BUTTON");
  takeDown.setAttribute("id", newTaskDescription.value);
  newTask.innerText = newTaskDescription.value;
  takeDown.innerText = "Delete";
  newTask.appendChild(takeDown);

  appendNewTask(newTask);

  takeDown.addEventListener("click", function(e) {
    let element = document.getElementById(newTask.id);
    element.parentNode.removeChild(element);
  });

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