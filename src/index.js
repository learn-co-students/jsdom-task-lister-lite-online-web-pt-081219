document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("#form-submit-btn").addEventListener("click", function(event) {
    let tasks = document.getElementById("tasks");
    let item = document.getElementById("new-task-description").value;
    let newTask = document.createElement("li")
    newTask.innerText = item
    tasks.appendChild(newTask);
    event.preventDefault();
  })

});
