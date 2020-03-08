document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskDescription = document.getElementById("new-task-description")
  const tasks = document.getElementById("tasks")
  const form = document.getElementById("create-task-form")
  console.log("form", form)

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const li = document.createElement("li")
    li.innerHTML = newTaskDescription.value
    console.log("submit", newTaskDescription.value)
    tasks.appendChild(li);
  }, false);

});
